import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "react/index.ts",
    "react/waste/outline/index.ts",
    "react/waste/solid/index.ts",
    "react/container/outline/index.ts",
    "react/WasteIcon.tsx",
    "react/ContainerIcon.tsx",
  ],
  format: ["esm"],
  dts: true,
  outDir: "dist",
  splitting: true,
  treeshake: true,
  clean: true,
  external: ["react", "react/jsx-runtime"],
});
