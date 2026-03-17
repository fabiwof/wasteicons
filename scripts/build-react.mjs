#!/usr/bin/env node

/**
 * build-react.mjs
 *
 * Reads all optimised SVGs from optimized/, generates React components with
 * forwardRef, currentColor support, and TypeScript declarations.
 *
 * Output layout:
 *   react/waste/outline/MiningIcon.tsx    (+ index.ts)
 *   react/waste/solid/MiningIcon.tsx      (+ index.ts)
 *   react/container/outline/SkipContainerIcon.tsx (+ index.ts)
 *   react/index.ts                        (root barrel)
 *
 * Usage:  node scripts/build-react.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OPTIMIZED = path.join(ROOT, "optimized");
const REACT_OUT = path.join(ROOT, "react");

// ─── Helpers ────────────────────────────────────────────────────────────────

function walkDir(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full));
    } else if (entry.name.endsWith(".svg")) {
      results.push(full);
    }
  }
  return results;
}

/** Convert kebab-case filename to PascalCase component name with "Icon" suffix */
function toPascalCase(filename) {
  const base = filename.replace(/\.svg$/, "");
  const pascal = base
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  return pascal + "Icon";
}

/**
 * Convert an SVG string to a React component string.
 *
 * - Replaces `<svg ...>` with a React-compatible opening that spreads props
 * - Converts kebab-case attributes to camelCase for React
 * - Uses currentColor for fill/stroke
 * - Wraps in forwardRef
 */
function svgToComponent(svgContent, componentName) {
  // Extract everything between <svg ...> and </svg>
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerContent = innerMatch ? innerMatch[1].trim() : "";

  // Extract viewBox from the svg tag
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  // Convert SVG attribute names to JSX camelCase
  let jsxInner = innerContent;
  jsxInner = jsxInner.replace(/stroke-linecap/g, "strokeLinecap");
  jsxInner = jsxInner.replace(/stroke-linejoin/g, "strokeLinejoin");
  jsxInner = jsxInner.replace(/stroke-width/g, "strokeWidth");
  jsxInner = jsxInner.replace(/stroke-dasharray/g, "strokeDasharray");
  jsxInner = jsxInner.replace(/fill-rule/g, "fillRule");
  jsxInner = jsxInner.replace(/fill-opacity/g, "fillOpacity");
  jsxInner = jsxInner.replace(/stroke-opacity/g, "strokeOpacity");
  jsxInner = jsxInner.replace(/clip-path/g, "clipPath");
  jsxInner = jsxInner.replace(/clip-rule/g, "clipRule");

  return `import { forwardRef } from "react";

const ${componentName} = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${viewBox}"
      fill="none"
      ref={ref}
      {...props}
    >
      ${jsxInner}
    </svg>
  )
);

${componentName}.displayName = "${componentName}";

export default ${componentName};
`;
}

/**
 * Generate barrel index.ts for a directory of components.
 */
function generateIndex(componentDir, components) {
  const lines = components.map(
    ({ componentName, fileName }) =>
      `export { default as ${componentName} } from "./${fileName.replace(".tsx", "")}";`
  );
  return lines.join("\n") + "\n";
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(OPTIMIZED)) {
    console.error(`Optimized directory not found: ${OPTIMIZED}`);
    console.error("Run 'node scripts/optimize.mjs' first.");
    process.exit(1);
  }

  const svgFiles = walkDir(OPTIMIZED);
  console.log(`Found ${svgFiles.length} optimised SVGs`);

  // Group by output directory
  const groups = {};

  for (const file of svgFiles) {
    const rel = path.relative(OPTIMIZED, file);
    const dir = path.dirname(rel); // e.g. "waste/outline"
    const base = path.basename(rel); // e.g. "mining.svg"

    if (!groups[dir]) groups[dir] = [];
    groups[dir].push({ file, base });
  }

  let totalComponents = 0;

  // Root barrel exports
  const rootExports = [];

  for (const [dir, files] of Object.entries(groups)) {
    const outDir = path.join(REACT_OUT, dir);
    fs.mkdirSync(outDir, { recursive: true });

    const components = [];

    for (const { file, base } of files) {
      const componentName = toPascalCase(base);
      const fileName = componentName + ".tsx";

      const svgContent = fs.readFileSync(file, "utf-8");
      const componentCode = svgToComponent(svgContent, componentName);

      fs.writeFileSync(path.join(outDir, fileName), componentCode, "utf-8");
      components.push({ componentName, fileName });
      totalComponents++;
    }

    // Sort for deterministic output
    components.sort((a, b) => a.componentName.localeCompare(b.componentName));

    // Write barrel index
    const indexContent = generateIndex(outDir, components);
    fs.writeFileSync(path.join(outDir, "index.ts"), indexContent, "utf-8");

    console.log(`  ${dir}/ -> ${components.length} components`);

    // Add to root barrel
    const importPath = `./${dir}`;
    rootExports.push(`export * from "${importPath}";`);
  }

  // Write root barrel
  rootExports.sort();
  fs.writeFileSync(
    path.join(REACT_OUT, "index.ts"),
    rootExports.join("\n") + "\n",
    "utf-8"
  );

  console.log(`\nGenerated ${totalComponents} React components in ${REACT_OUT}`);
}

main();
