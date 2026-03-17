import MiniSearch from "minisearch";
import type { IconEntry } from "../data/icons";
import avvSynonyme from "../data/avv-synonyme.json";
import avvCodes from "../data/avv-codes.json";

// Build AVV-code → bezeichnung_kurz lookup
const codeToLabel = new Map<string, string>();
for (const entry of avvCodes) {
  codeToLabel.set(entry.code, entry.bezeichnung_kurz);
}

// Build synonym → AVV codes lookup
const synonymToAvv = avvSynonyme as Record<string, string[]>;

interface SearchDoc {
  id: string;
  slug: string;
  nameEn: string;
  nameDe: string;
  componentName: string;
  avvCodes: string;
  avvFormatted: string;
  avvLabels: string;
  synonyms: string;
}

let miniSearch: MiniSearch<SearchDoc>;

/**
 * For every 6-digit AVV code, find the best icon via hierarchy:
 *   exact 6-digit match → 4-digit group → 2-digit chapter
 * Returns a map: icon id → Set of all AVV codes that resolve to it.
 */
function buildFullAvvMapping(icons: IconEntry[]): Map<string, Set<string>> {
  // Direct AVV code → icon id (from explicit mappings)
  const codeToIconId = new Map<string, string>();
  for (const icon of icons) {
    const id = `${icon.category}-${icon.slug}`;
    for (const code of icon.avvCodes) {
      codeToIconId.set(code, id);
    }
  }

  // For each code in the full catalog, resolve to best icon
  const iconToAllCodes = new Map<string, Set<string>>();

  for (const entry of avvCodes) {
    const code = entry.code; // always 6 digits
    const group = code.slice(0, 4); // 4 digits
    const chapter = code.slice(0, 2); // 2 digits

    const iconId =
      codeToIconId.get(code) ??
      codeToIconId.get(group) ??
      codeToIconId.get(chapter);

    if (iconId) {
      const set = iconToAllCodes.get(iconId) ?? new Set();
      set.add(code);
      iconToAllCodes.set(iconId, set);
    }
  }

  return iconToAllCodes;
}

function formatCode(c: string): string {
  if (c.length === 6) return `${c.slice(0, 2)} ${c.slice(2, 4)} ${c.slice(4)}`;
  if (c.length === 4) return `${c.slice(0, 2)} ${c.slice(2)}`;
  return c;
}

export function initSearch(icons: IconEntry[]) {
  const iconToAllCodes = buildFullAvvMapping(icons);

  // Build AVV code → icon slugs (full catalog) for synonym resolution
  const avvToIds = new Map<string, Set<string>>();
  for (const [iconId, codes] of iconToAllCodes) {
    for (const code of codes) {
      const set = avvToIds.get(code) ?? new Set();
      set.add(iconId);
      avvToIds.set(code, set);
    }
  }

  // Build synonym text per icon (via synonym → AVV → icon)
  const idToSynonyms = new Map<string, Set<string>>();
  for (const [synonym, codes] of Object.entries(synonymToAvv)) {
    for (const code of codes) {
      const ids = avvToIds.get(code);
      if (ids) {
        for (const id of ids) {
          const set = idToSynonyms.get(id) ?? new Set();
          set.add(synonym);
          idToSynonyms.set(id, set);
        }
      }
    }
  }

  miniSearch = new MiniSearch<SearchDoc>({
    fields: [
      "slug",
      "nameEn",
      "nameDe",
      "componentName",
      "avvCodes",
      "avvFormatted",
      "avvLabels",
      "synonyms",
    ],
    storeFields: ["id"],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: {
        nameDe: 3,
        nameEn: 3,
        slug: 2,
        synonyms: 2,
        avvCodes: 2,
        avvFormatted: 2,
        avvLabels: 1.5,
        componentName: 1,
      },
    },
  });

  const docs: SearchDoc[] = icons.map((icon) => {
    const id = `${icon.category}-${icon.slug}`;
    const allCodes = iconToAllCodes.get(id) ?? new Set<string>();

    // Also include the directly mapped codes (2/4-digit)
    for (const c of icon.avvCodes) {
      allCodes.add(c);
    }

    const codesArray = [...allCodes];

    // Raw codes for exact search (e.g. "170904")
    const rawCodes = codesArray.join(" ");

    // Formatted codes for spaced search (e.g. "17 09 04")
    const formatted = codesArray.map(formatCode).join(" ");

    // bezeichnung_kurz for all 6-digit codes
    const labels = codesArray
      .filter((c) => c.length === 6)
      .map((c) => codeToLabel.get(c) ?? "")
      .filter(Boolean)
      .join(" ");

    const synonyms = [...(idToSynonyms.get(id) ?? [])].join(" ");

    return {
      id,
      slug: icon.slug,
      nameEn: icon.name,
      nameDe: icon.nameDe,
      componentName: icon.componentName,
      avvCodes: rawCodes,
      avvFormatted: formatted,
      avvLabels: labels,
      synonyms,
    };
  });

  miniSearch.addAll(docs);
}

export function search(query: string): Set<string> {
  if (!miniSearch) return new Set();
  const results = miniSearch.search(query);
  return new Set(results.map((r) => r.id));
}
