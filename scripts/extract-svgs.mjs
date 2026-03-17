#!/usr/bin/env node

/**
 * extract-svgs.mjs
 *
 * Reads the AbfallIcon.tsx (outline), AbfallIconSolid*.tsx (solid), and
 * ContainerIcon.tsx source files, extracts every SVG icon definition, converts
 * JSX to valid SVG markup, and writes standalone .svg files.
 *
 * Output layout:
 *   src/waste/outline/<name>.svg
 *   src/waste/solid/<name>.svg
 *   src/container/outline/<name>.svg
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src");
const ICON_DIR = path.resolve(
  ROOT,
  "../app/tools/avv-verzeichnis/[code]"
);

// ─── Name mappings ──────────────────────────────────────────────────────────

/** AVV code → descriptive English file name (no extension) */
const wasteNames = {
  // ── Chapter icons (2-digit) ────────────────────────────────────────────
  "01": "mining",
  "02": "agriculture",
  "03": "wood-paper",
  "04": "leather-textile",
  "05": "petroleum",
  "06": "inorganic-chemistry",
  "07": "organic-chemistry",
  "08": "coatings-paint",
  "09": "photographic-industry",
  "10": "thermal-processes",
  "11": "surface-treatment",
  "12": "metal-shaping",
  "13": "waste-oils",
  "14": "solvents",
  "15": "packaging",
  "16": "miscellaneous-waste",
  "17": "construction-demolition",
  "18": "medical-waste",
  "19": "waste-treatment",
  "20": "municipal-waste",

  // ── Group icons (4-digit) ──────────────────────────────────────────────
  "0101": "mineral-extraction",
  "0103": "processing-residues",
  "0104": "non-metallic-minerals",
  "0105": "drilling-muds",
  "0201": "agriculture-farming",
  "0202": "meat-fish",
  "0203": "fruit-vegetables",
  "0204": "sugar-production",
  "0205": "dairy-processing",
  "0206": "bakery-confectionery",
  "0207": "beverage-production",
  "0301": "woodworking",
  "0302": "wood-preservatives",
  "0303": "paper-pulp",
  "0401": "leather-industry",
  "0402": "textile-industry",
  "0501": "oil-refining",
  "0506": "coal-pyrolysis",
  "0507": "gas-purification",
  "0601": "acids",
  "0602": "bases",
  "0603": "salts-metal-oxides",
  "0604": "metal-containing-waste",
  "0605": "sludge-wastewater",
  "0606": "sulfur-chemistry",
  "0607": "halogen-chemistry",
  "0608": "silicon",
  "0609": "phosphorus-chemistry",
  "0610": "nitrogen-fertilizer",
  "0611": "inorganic-pigments",
  "0613": "inorganic-chemistry-other",
  "0701": "basic-organic-chemicals",
  "0702": "plastics-rubber",
  "0703": "organic-dyes",
  "0704": "pesticides-biocides",
  "0705": "pharmaceuticals",
  "0706": "fats-soaps-detergents",
  "0707": "fine-chemicals",
  "0801": "paints-lacquers",
  "0802": "spray-coatings",
  "0803": "printing-ink",
  "0804": "adhesives-sealants",
  "0805": "coatings-other",
  "0901": "photographic-film",
  "1001": "power-plants",
  "1002": "iron-steel",
  "1003": "aluminium-metallurgy",
  "1004": "lead-metallurgy",
  "1005": "zinc-metallurgy",
  "1006": "copper-metallurgy",
  "1007": "precious-metals",
  "1008": "non-ferrous-metallurgy",
  "1009": "foundry-waste",
  "1010": "foundry-waste-non-ferrous",
  "1011": "glass-manufacturing",
  "1012": "ceramics",
  "1013": "cement-concrete",
  "1014": "crematorium",
  "1101": "chemical-surface-treatment",
  "1102": "hydrometallurgy",
  "1103": "hardening-sludge",
  "1105": "hot-dip-galvanising",
  "1201": "mechanical-shaping",
  "1203": "steam-degreasing",
  "1301": "hydraulic-oils",
  "1302": "engine-gear-oils",
  "1303": "insulating-oils",
  "1304": "bilge-oils",
  "1305": "oil-water-separator",
  "1307": "liquid-fuels",
  "1308": "waste-oils-other",
  "1406": "organic-solvents",
  "1501": "packaging-materials",
  "1502": "absorbent-materials",
  "1601": "end-of-life-vehicles",
  "1602": "electronic-equipment",
  "1603": "off-spec-batches",
  "1604": "ammunition-explosives",
  "1605": "pressurised-gas-cylinders",
  "1606": "batteries",
  "1607": "tank-cleaning",
  "1608": "spent-catalysts",
  "1609": "oxidising-agents",
  "1610": "aqueous-liquid-waste",
  "1611": "refractory-linings",
  "1701": "concrete-bricks-tiles",
  "1702": "wood-glass-plastic",
  "1703": "asphalt-tar",
  "1704": "metals",
  "1705": "soil-dredging",
  "1706": "insulation-materials",
  "1708": "gypsum",
  "1709": "mixed-construction-waste",
  "1801": "human-medicine",
  "1802": "veterinary-medicine",
  "1901": "incineration",
  "1902": "physico-chemical-treatment",
  "1903": "stabilised-waste",
  "1904": "vitrified-waste",
  "1905": "composting",
  "1906": "anaerobic-digestion",
  "1907": "landfill-leachate",
  "1908": "wastewater-treatment",
  "1909": "drinking-water-treatment",
  "1910": "shredder",
  "1911": "waste-oil-regeneration",
  "1912": "sorting",
  "1913": "soil-remediation",
  "2001": "sorted-fractions",
  "2002": "garden-park-waste",
  "2003": "other-municipal-waste",

  // ── Code-specific icons (6-digit) ──────────────────────────────────────
  "080111": "hazardous-paint",
  "150102": "plastic-packaging",
  "150103": "wood-packaging",
  "150104": "metal-packaging",
  "150105": "composite-packaging",
  "150107": "glass-packaging",
  "170101": "concrete",
  "170102": "brick",
  "170103": "tiles-ceramics",
  "170106": "contaminated-rubble",
  "170107": "rubble",
  "170201": "lumber",
  "170202": "flat-glass",
  "170203": "construction-plastic",
  "170301": "tarry-asphalt",
  "170302": "asphalt",
  "170303": "coal-tar",
  "170405": "iron-steel-scrap",
  "170407": "mixed-scrap",
  "170410": "contaminated-cables",
  "170411": "cables",
  "170503": "contaminated-soil",
  "170504": "excavated-soil",
  "170506": "dredging-spoil",
  "170508": "track-ballast",
  "170601": "asbestos-insulation",
  "170605": "asbestos-building-materials",
  "170901": "mercury-construction-waste",
  "170902": "pcb-construction-waste",
  "200101": "waste-paper",
  "200102": "waste-glass",
  "200108": "bio-waste",
  "200110": "old-clothes",
  "200113": "hazardous-solvents",
  "200121": "fluorescent-tubes",
  "200126": "cooking-oil",
  "200127": "hazardous-paint-municipal",
  "200128": "paint-municipal",
  "200132": "medicines",
  "200133": "hazardous-batteries",
  "200134": "batteries-municipal",
  "200135": "hazardous-electronics",
  "200136": "electronics",
  "200137": "hazardous-wood",
  "200138": "wood",
  "200139": "plastics",
  "200140": "scrap-metal",
  "200201": "green-waste",
  "200301": "residual-waste",
  "200303": "street-sweepings",
  "200307": "bulky-waste",
};

/** Container German name → descriptive English file name */
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

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Convert JSX SVG markup to standard SVG:
 *  - className={className} → removed (standalone SVGs don't need it)
 *  - strokeLinecap → stroke-linecap  etc.
 *  - strokeLinejoin → stroke-linejoin
 *  - strokeWidth → stroke-width
 *  - strokeDasharray → stroke-dasharray
 *  - fillRule → fill-rule
 *  - fillOpacity → fill-opacity
 *  - Add xmlns if missing
 *  - Remove JSX comments {/* ... * /}
 *  - Replace self-closing JSX expressions
 */
function jsxToSvg(jsx) {
  let svg = jsx;

  // Remove {/* ... */} JSX comments
  svg = svg.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

  // Remove className={className}
  svg = svg.replace(/\s*className=\{className\}/g, "");

  // Convert camelCase attributes to kebab-case
  svg = svg.replace(/strokeLinecap/g, "stroke-linecap");
  svg = svg.replace(/strokeLinejoin/g, "stroke-linejoin");
  svg = svg.replace(/strokeWidth/g, "stroke-width");
  svg = svg.replace(/strokeDasharray/g, "stroke-dasharray");
  svg = svg.replace(/fillRule/g, "fill-rule");
  svg = svg.replace(/fillOpacity/g, "fill-opacity");
  svg = svg.replace(/strokeOpacity/g, "stroke-opacity");

  // Add xmlns if not present
  if (!svg.includes("xmlns=")) {
    svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // Trim whitespace
  svg = svg.trim();

  return svg;
}

/**
 * Extract icon entries from a source file's exported object.
 * Returns an array of { key, svgJsx }.
 *
 * Strategy: find each `"key": ({ className }) => (` then grab everything
 * from the first `<svg` to the matching `</svg>`.
 */
function extractIcons(source) {
  const icons = [];

  // Match entries like: "01": ({ className }) => ( ... <svg ...>...</svg> ... ),
  // We look for the key, then find the SVG inside.
  const entryPattern = /"(\w+)":\s*\(\{[^}]*\}\)\s*=>\s*\(/g;
  let match;

  while ((match = entryPattern.exec(source)) !== null) {
    const key = match[1];
    const startPos = match.index + match[0].length;

    // Find the <svg opening tag after this position
    const svgStart = source.indexOf("<svg", startPos);
    if (svgStart === -1) continue;

    // Find matching </svg> — count nested depth isn't needed since
    // there are no nested <svg> elements in these icons
    const svgEnd = source.indexOf("</svg>", svgStart);
    if (svgEnd === -1) continue;

    let svgJsx = source.substring(svgStart, svgEnd + 6);

    // Inline <Hazard /> and <HazardSolid /> components
    svgJsx = svgJsx.replace(
      /<Hazard\s*\/>/g,
      `<g>
      <path d="M19 10l2.5 4.5H16.5L19 10z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
      <line x1="19" y1="12.5" x2="19" y2="13.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="19" cy="14" r="0.4" fill="currentColor" />
    </g>`
    );

    svgJsx = svgJsx.replace(
      /<HazardSolid\s*\/>/g,
      `<g>
      <path d="M19 10l2.5 4.5H16.5L19 10z" fill="currentColor" opacity="0.6" />
      <circle cx="19" cy="14" r="0.5" fill="white" />
      <rect x="18.6" y="11.8" width="0.8" height="1.5" rx="0.4" fill="white" />
    </g>`
    );

    icons.push({ key, svgJsx: jsxToSvg(svgJsx) });
  }

  return icons;
}

/**
 * Extract container icons from ContainerIcon.tsx.
 * Container icons are defined as standalone functions, not in an object.
 */
function extractContainerIcons(source) {
  const icons = [];

  // Match: function FooIcon({ className }: ...) { return ( <svg ...>...</svg> ); }
  // The switch statement at the end tells us the mapping.
  const fnPattern =
    /function\s+(\w+Icon)\s*\(\{[^}]*\}[^)]*\)\s*\{[^]*?return\s*\(\s*(<svg[\s\S]*?<\/svg>)\s*\);\s*\}/g;

  let match;
  while ((match = fnPattern.exec(source)) !== null) {
    const fnName = match[1];
    const svgJsx = match[2];
    icons.push({ fnName, svgJsx: jsxToSvg(svgJsx) });
  }

  return icons;
}

/**
 * Given a function name like "AbsetzcontainerIcon", find the German container
 * name from the switch statement, then map to English.
 */
function containerFnToName(fnName, source) {
  // Build a map from the switch statement
  const switchMap = {};
  const casePattern =
    /case\s+"([^"]+)":\s*return\s+<(\w+Icon)/g;
  let m;
  while ((m = casePattern.exec(source)) !== null) {
    switchMap[m[2]] = m[1];
  }

  const germanName = switchMap[fnName];
  if (germanName && containerNames[germanName]) {
    return containerNames[germanName];
  }

  // Fallback: convert function name to kebab-case
  return fnName
    .replace(/Icon$/, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

function writeSvg(dir, name, content) {
  const outDir = path.join(SRC_DIR, dir);
  fs.mkdirSync(outDir, { recursive: true });
  const filePath = path.join(outDir, `${name}.svg`);
  fs.writeFileSync(filePath, content, "utf-8");
  return filePath;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  let totalCount = 0;

  // ── 1. Outline waste icons (AbfallIcon.tsx) ────────────────────────────
  console.log("Extracting outline waste icons...");
  const outlineSrc = fs.readFileSync(
    path.join(ICON_DIR, "AbfallIcon.tsx"),
    "utf-8"
  );

  const outlineIcons = extractIcons(outlineSrc);
  for (const { key, svgJsx } of outlineIcons) {
    const name = wasteNames[key] || `avv-${key}`;
    writeSvg("waste/outline", name, svgJsx);
    totalCount++;
  }
  console.log(`  -> ${outlineIcons.length} outline waste icons`);

  // ── 2. Solid waste icons (AbfallIconSolid*.tsx partials) ───────────────
  console.log("Extracting solid waste icons...");
  const solidFiles = [
    "AbfallIconSolid.tsx",
    "AbfallIconSolid_06_10.tsx",
    "AbfallIconSolid_11_15.tsx",
    "AbfallIconSolid_16_20.tsx",
  ];

  let solidCount = 0;
  for (const file of solidFiles) {
    const solidSrc = fs.readFileSync(path.join(ICON_DIR, file), "utf-8");
    const solidIcons = extractIcons(solidSrc);
    for (const { key, svgJsx } of solidIcons) {
      const name = wasteNames[key] || `avv-${key}`;
      writeSvg("waste/solid", name, svgJsx);
      solidCount++;
      totalCount++;
    }
  }
  console.log(`  -> ${solidCount} solid waste icons`);

  // ── 3. Container icons (ContainerIcon.tsx) ─────────────────────────────
  console.log("Extracting container icons...");
  const containerSrc = fs.readFileSync(
    path.join(ICON_DIR, "ContainerIcon.tsx"),
    "utf-8"
  );

  const containerIcons = extractContainerIcons(containerSrc);
  for (const { fnName, svgJsx } of containerIcons) {
    const name = containerFnToName(fnName, containerSrc);
    writeSvg("container/outline", name, svgJsx);
    totalCount++;
  }
  console.log(`  -> ${containerIcons.length} container icons`);

  console.log(`\nTotal: ${totalCount} SVGs extracted to ${SRC_DIR}`);
}

main();
