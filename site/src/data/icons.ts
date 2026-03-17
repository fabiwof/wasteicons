import { iconMeta } from "./icon-meta";

export interface IconEntry {
  slug: string;
  name: string;
  nameDe: string;
  category: "waste" | "container";
  svg: string;
  componentName: string;
  avvCodes: string[];
  chapter: string;
  searchTerms: string;
}

function toPascalCase(slug: string): string {
  return (
    slug
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("") + "Icon"
  );
}

function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

const wasteModules = import.meta.glob<string>(
  "../../../optimized/waste/outline/*.svg",
  { query: "?raw", eager: true, import: "default" },
);

const containerModules = import.meta.glob<string>(
  "../../../optimized/container/outline/*.svg",
  { query: "?raw", eager: true, import: "default" },
);

function parseModules(
  modules: Record<string, string>,
  category: "waste" | "container",
): IconEntry[] {
  return Object.entries(modules).map(([path, svg]) => {
    const filename = path.split("/").pop()!.replace(".svg", "");
    const slug = filename;
    const name = slugToName(slug);
    const componentName = toPascalCase(slug);
    const meta = iconMeta[slug];
    const nameDe = meta?.de ?? name;
    const avvCodes = meta?.avvCodes ?? [];
    const chapter = avvCodes[0]?.slice(0, 2) ?? "";
    return {
      slug,
      name,
      nameDe,
      category,
      svg,
      componentName,
      avvCodes,
      chapter,
      searchTerms: `${slug} ${name} ${componentName}`.toLowerCase(),
    };
  });
}

const wasteIcons = parseModules(wasteModules, "waste").sort((a, b) => {
  const codeA = a.avvCodes[0] ?? "";
  const codeB = b.avvCodes[0] ?? "";
  if (!codeA && !codeB) return a.slug.localeCompare(b.slug);
  if (!codeA) return 1;
  if (!codeB) return -1;
  // Sort by chapter first, then by full code length (2→4→6), then by code value
  if (a.chapter !== b.chapter) return a.chapter.localeCompare(b.chapter);
  if (codeA.length !== codeB.length) return codeA.length - codeB.length;
  return codeA.localeCompare(codeB);
});
const containerIcons = parseModules(containerModules, "container").sort(
  (a, b) => a.slug.localeCompare(b.slug),
);

export const allIcons: IconEntry[] = [...wasteIcons, ...containerIcons];
export const wasteCount = wasteIcons.length;
export const containerCount = containerIcons.length;
