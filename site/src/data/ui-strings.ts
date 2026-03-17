import type { Language } from "../context/LanguageContext";

const strings = {
  searchPlaceholder: {
    de: "Alle Icons durchsuchen\u2026",
    en: "Search all icons\u2026",
  },
  categoryAll: { de: "Alle", en: "All" },
  categoryWaste: { de: "Abfall", en: "Waste" },
  categoryContainer: { de: "Beh\u00e4lter", en: "Container" },
  noIconsFound: { de: "Keine Icons gefunden.", en: "No icons found." },
  copied: { de: "Kopiert!", en: "Copied!" },
  heroSubline: {
    de: "SVG-Icons f\u00fcr die Abfallwirtschaft.",
    en: "SVG icons for the waste industry.",
  },
  license: { de: "MIT-Lizenz", en: "MIT License" },
  docs: { de: "Dokumentation", en: "Documentation" },
  builtBy: { de: "Ein Projekt von", en: "A project by" },
  legalNotice: { de: "Impressum", en: "Legal Notice" },
  privacyPolicy: { de: "Datenschutz", en: "Privacy Policy" },
  nIcons: { de: "Icons", en: "Icons" },
} as const;

type StringKey = keyof typeof strings;

export function t(key: StringKey, lang: Language): string {
  return strings[key][lang];
}
