#!/usr/bin/env node

/**
 * optimize.mjs
 *
 * Reads all raw SVGs from src/, runs SVGO optimisation, and writes results
 * to optimized/ maintaining the same directory structure.
 *
 * Usage:  node scripts/optimize.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { optimize } from "svgo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const OUT = path.join(ROOT, "optimized");

// ─── SVGO config ────────────────────────────────────────────────────────────

const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Keep viewBox (we remove width/height instead)
          removeViewBox: false,
          // Keep currentColor references intact
          convertColors: {
            currentColor: false,
          },
          // Don't merge paths — keeps icon anatomy readable
          mergePaths: false,
          // Reduce precision on coordinates
          cleanupNumericValues: {
            floatPrecision: 2,
          },
          // Don't collapse groups with opacity — needed for layered icons
          collapseGroups: false,
        },
      },
    },
    // Remove any leftover class attributes
    {
      name: "removeAttrs",
      params: {
        attrs: ["class"],
      },
    },
    // Ensure width/height are absent (viewBox is the source of truth)
    "removeDimensions",
    // Sort attributes for deterministic output
    "sortAttrs",
  ],
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function walkDir(dir) {
  const results = [];
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

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`Source directory not found: ${SRC}`);
    console.error("Run 'node scripts/extract-svgs.mjs' first.");
    process.exit(1);
  }

  const svgFiles = walkDir(SRC);
  console.log(`Found ${svgFiles.length} SVGs in ${SRC}`);

  let totalSaved = 0;

  for (const file of svgFiles) {
    const rel = path.relative(SRC, file);
    const outPath = path.join(OUT, rel);

    const raw = fs.readFileSync(file, "utf-8");
    const result = optimize(raw, {
      ...svgoConfig,
      path: file,
    });

    const optimized = result.data;
    const saved = raw.length - optimized.length;
    totalSaved += saved;

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, optimized, "utf-8");
  }

  const pct = svgFiles.length
    ? ((totalSaved / svgFiles.reduce((s, f) => s + fs.readFileSync(f, "utf-8").length, 0)) * 100).toFixed(1)
    : 0;

  console.log(
    `Optimised ${svgFiles.length} SVGs -> ${OUT} (${pct}% smaller total)`
  );
}

main();
