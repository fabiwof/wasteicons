#!/usr/bin/env node

/**
 * generate-icon-meta.mjs
 *
 * Reads wasteNames + containerNames from extract-svgs.mjs and codes.json,
 * generates site/src/data/icon-meta.ts with German names and AVV codes.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ─── Load codes.json ─────────────────────────────────────────────────────────

const codes = JSON.parse(
  fs.readFileSync(
    path.join(ROOT, "site/src/data/avv-codes.json"),
    "utf-8",
  ),
);

// Build lookup maps from codes.json
const codeToBezeichnung = new Map();
const kapitelToBezeichnung = new Map();
const gruppeToBezeichnung = new Map();

for (const entry of codes) {
  codeToBezeichnung.set(entry.code, entry.bezeichnung_kurz);
  if (!kapitelToBezeichnung.has(entry.kapitel)) {
    kapitelToBezeichnung.set(entry.kapitel, entry.kapitel_bezeichnung);
  }
  const gruppeNorm = entry.gruppe.replace(/\s/g, "");
  if (!gruppeToBezeichnung.has(gruppeNorm)) {
    gruppeToBezeichnung.set(gruppeNorm, entry.gruppe_bezeichnung);
  }
}

// ─── wasteNames (AVV code → English slug) from extract-svgs.mjs ─────────────

const wasteNames = {
  "01": "mining", "02": "agriculture", "03": "wood-paper",
  "04": "leather-textile", "05": "petroleum", "06": "inorganic-chemistry",
  "07": "organic-chemistry", "08": "coatings-paint", "09": "photographic-industry",
  "10": "thermal-processes", "11": "surface-treatment", "12": "metal-shaping",
  "13": "waste-oils", "14": "solvents", "15": "packaging",
  "16": "miscellaneous-waste", "17": "construction-demolition", "18": "medical-waste",
  "19": "waste-treatment", "20": "municipal-waste",
  "0101": "mineral-extraction", "0103": "processing-residues",
  "0104": "non-metallic-minerals", "0105": "drilling-muds",
  "0201": "agriculture-farming", "0202": "meat-fish",
  "0203": "fruit-vegetables", "0204": "sugar-production",
  "0205": "dairy-processing", "0206": "bakery-confectionery",
  "0207": "beverage-production", "0301": "woodworking",
  "0302": "wood-preservatives", "0303": "paper-pulp",
  "0401": "leather-industry", "0402": "textile-industry",
  "0501": "oil-refining", "0506": "coal-pyrolysis",
  "0507": "gas-purification", "0601": "acids",
  "0602": "bases", "0603": "salts-metal-oxides",
  "0604": "metal-containing-waste", "0605": "sludge-wastewater",
  "0606": "sulfur-chemistry", "0607": "halogen-chemistry",
  "0608": "silicon", "0609": "phosphorus-chemistry",
  "0610": "nitrogen-fertilizer", "0611": "inorganic-pigments",
  "0613": "inorganic-chemistry-other", "0701": "basic-organic-chemicals",
  "0702": "plastics-rubber", "0703": "organic-dyes",
  "0704": "pesticides-biocides", "0705": "pharmaceuticals",
  "0706": "fats-soaps-detergents", "0707": "fine-chemicals",
  "0801": "paints-lacquers", "0802": "spray-coatings",
  "0803": "printing-ink", "0804": "adhesives-sealants",
  "0805": "coatings-other", "0901": "photographic-film",
  "1001": "power-plants", "1002": "iron-steel",
  "1003": "aluminium-metallurgy", "1004": "lead-metallurgy",
  "1005": "zinc-metallurgy", "1006": "copper-metallurgy",
  "1007": "precious-metals", "1008": "non-ferrous-metallurgy",
  "1009": "foundry-waste", "1010": "foundry-waste-non-ferrous",
  "1011": "glass-manufacturing", "1012": "ceramics",
  "1013": "cement-concrete", "1014": "crematorium",
  "1101": "chemical-surface-treatment", "1102": "hydrometallurgy",
  "1103": "hardening-sludge", "1105": "hot-dip-galvanising",
  "1201": "mechanical-shaping", "1203": "steam-degreasing",
  "1301": "hydraulic-oils", "1302": "engine-gear-oils",
  "1303": "insulating-oils", "1304": "bilge-oils",
  "1305": "oil-water-separator", "1307": "liquid-fuels",
  "1308": "waste-oils-other", "1406": "organic-solvents",
  "1501": "packaging-materials", "1502": "absorbent-materials",
  "1601": "end-of-life-vehicles", "1602": "electronic-equipment",
  "1603": "off-spec-batches", "1604": "ammunition-explosives",
  "1605": "pressurised-gas-cylinders", "1606": "batteries",
  "1607": "tank-cleaning", "1608": "spent-catalysts",
  "1609": "oxidising-agents", "1610": "aqueous-liquid-waste",
  "1611": "refractory-linings", "1701": "concrete-bricks-tiles",
  "1702": "wood-glass-plastic", "1703": "asphalt-tar",
  "1704": "metals", "1705": "soil-dredging",
  "1706": "insulation-materials", "1708": "gypsum",
  "1709": "mixed-construction-waste", "1801": "human-medicine",
  "1802": "veterinary-medicine", "1901": "incineration",
  "1902": "physico-chemical-treatment", "1903": "stabilised-waste",
  "1904": "vitrified-waste", "1905": "composting",
  "1906": "anaerobic-digestion", "1907": "landfill-leachate",
  "1908": "wastewater-treatment", "1909": "drinking-water-treatment",
  "1910": "shredder", "1911": "waste-oil-regeneration",
  "1912": "sorting", "1913": "soil-remediation",
  "2001": "sorted-fractions", "2002": "garden-park-waste",
  "2003": "other-municipal-waste",
  "080111": "hazardous-paint", "150102": "plastic-packaging",
  "150103": "wood-packaging", "150104": "metal-packaging",
  "150105": "composite-packaging", "150107": "glass-packaging",
  "170101": "concrete", "170102": "brick",
  "170103": "tiles-ceramics", "170106": "contaminated-rubble",
  "170107": "rubble", "170201": "lumber",
  "170202": "flat-glass", "170203": "construction-plastic",
  "170301": "tarry-asphalt", "170302": "asphalt",
  "170303": "coal-tar", "170405": "iron-steel-scrap",
  "170407": "mixed-scrap", "170410": "contaminated-cables",
  "170411": "cables", "170503": "contaminated-soil",
  "170504": "excavated-soil", "170506": "dredging-spoil",
  "170508": "track-ballast", "170601": "asbestos-insulation",
  "170605": "asbestos-building-materials",
  "170901": "mercury-construction-waste",
  "170902": "pcb-construction-waste",
  "200101": "waste-paper", "200102": "waste-glass",
  "200108": "bio-waste", "200110": "old-clothes",
  "200113": "hazardous-solvents", "200121": "fluorescent-tubes",
  "200126": "cooking-oil", "200127": "hazardous-paint-municipal",
  "200128": "paint-municipal", "200132": "medicines",
  "200133": "hazardous-batteries", "200134": "batteries-municipal",
  "200135": "hazardous-electronics", "200136": "electronics",
  "200137": "hazardous-wood", "200138": "wood",
  "200139": "plastics", "200140": "scrap-metal",
  "200201": "green-waste", "200301": "residual-waste",
  "200303": "street-sweepings", "200307": "bulky-waste",
};

const containerNames = {
  Absetzcontainer: "skip-container",
  Abrollcontainer: "roll-off-container",
  "Umleerbehälter": "front-loader-bin",
  Abrollcontainerpresse: "roll-off-compactor",
  "Big Bag": "big-bag",
  Depotcontainer: "depot-container",
  "Frontladerbehälter": "front-loader-container",
  Absetzcontainerpresse: "skip-compactor",
  "Sonderabfallbehälter": "hazardous-waste-container",
  Fass: "drum",
  "Krankenhausabfallbehälter": "clinical-waste-container",
  Unterflursystem: "underground-system",
  Gitterbox: "mesh-pallet-box",
  Kanister: "canister",
  "Aktenbehälter": "document-container",
  IBC: "ibc-container",
  Sackware: "sack-pallet",
  "Palettenbehälter": "pallet-container",
  Tankcontainer: "tank-container",
  Halbschalencontainer: "half-shell-container",
  "Stationäre Presse": "stationary-compactor",
};

// ─── Build reverse mappings ──────────────────────────────────────────────────

const meta = {};

// Waste icons: slug → { de, avvCodes }
for (const [avvCode, slug] of Object.entries(wasteNames)) {
  if (!meta[slug]) {
    meta[slug] = { de: "", avvCodes: [] };
  }
  meta[slug].avvCodes.push(avvCode);

  // Determine German name based on code length
  let deName = "";
  if (avvCode.length === 6) {
    deName = codeToBezeichnung.get(avvCode) || "";
  } else if (avvCode.length === 4) {
    deName = gruppeToBezeichnung.get(avvCode) || "";
  } else if (avvCode.length === 2) {
    deName = kapitelToBezeichnung.get(avvCode) || "";
  }

  // Use the most specific name available
  if (deName && (!meta[slug].de || avvCode.length >= meta[slug]._bestLen)) {
    meta[slug].de = deName;
    meta[slug]._bestLen = avvCode.length;
  }
}

// Container icons: reverse containerNames
for (const [germanName, slug] of Object.entries(containerNames)) {
  meta[slug] = { de: germanName, avvCodes: [] };
}

// Clean up internal tracking field
for (const entry of Object.values(meta)) {
  delete entry._bestLen;
}

// ─── Generate TypeScript ─────────────────────────────────────────────────────

const lines = [
  "// Auto-generated by scripts/generate-icon-meta.mjs — do not edit manually",
  "",
  "export const iconMeta: Record<string, { de: string; avvCodes: string[] }> = {",
];

for (const [slug, { de, avvCodes }] of Object.entries(meta).sort((a, b) =>
  a[0].localeCompare(b[0]),
)) {
  const codesStr = avvCodes.map((c) => `"${c}"`).join(", ");
  lines.push(`  "${slug}": { de: ${JSON.stringify(de)}, avvCodes: [${codesStr}] },`);
}

lines.push("};");
lines.push("");

const outPath = path.join(ROOT, "site/src/data/icon-meta.ts");
fs.writeFileSync(outPath, lines.join("\n"), "utf-8");
console.log(`Generated ${outPath} with ${Object.keys(meta).length} entries`);
