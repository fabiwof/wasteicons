const ATTR_MAP: Record<string, string> = {
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  xmlns: "",
};

export function svgToJsx(svg: string): string {
  let jsx = svg;
  // Remove xmlns
  jsx = jsx.replace(/\s+xmlns="[^"]*"/g, "");
  // Convert kebab-case attributes to camelCase
  for (const [kebab, camel] of Object.entries(ATTR_MAP)) {
    if (kebab === "xmlns") continue;
    jsx = jsx.replaceAll(kebab, camel);
  }
  return jsx;
}
