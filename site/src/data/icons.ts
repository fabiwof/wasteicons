export interface IconEntry {
  slug: string;
  name: string;
  category: "waste" | "container";
  svg: string;
  componentName: string;
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
    return {
      slug,
      name,
      category,
      svg,
      componentName,
      searchTerms: `${slug} ${name} ${componentName}`.toLowerCase(),
    };
  });
}

const wasteIcons = parseModules(wasteModules, "waste").sort((a, b) =>
  a.slug.localeCompare(b.slug),
);
const containerIcons = parseModules(containerModules, "container").sort(
  (a, b) => a.slug.localeCompare(b.slug),
);

export const allIcons: IconEntry[] = [...wasteIcons, ...containerIcons];
export const wasteCount = wasteIcons.length;
export const containerCount = containerIcons.length;
