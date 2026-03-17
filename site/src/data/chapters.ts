export interface ChapterInfo {
  code: string;
  de: string;
  en: string;
}

export const chapters: ChapterInfo[] = [
  { code: "01", de: "Bergbau", en: "Mining" },
  { code: "02", de: "Landwirtschaft", en: "Agriculture" },
  { code: "03", de: "Holz & Papier", en: "Wood & Paper" },
  { code: "04", de: "Leder & Textil", en: "Leather & Textile" },
  { code: "05", de: "Erdöl & Gas", en: "Petroleum & Gas" },
  { code: "06", de: "Anorg. Chemie", en: "Inorganic Chemistry" },
  { code: "07", de: "Org. Chemie", en: "Organic Chemistry" },
  { code: "08", de: "Beschichtungen", en: "Coatings & Paint" },
  { code: "09", de: "Fotoindustrie", en: "Photographic" },
  { code: "10", de: "Thermische Proz.", en: "Thermal Processes" },
  { code: "11", de: "Oberflächenbeh.", en: "Surface Treatment" },
  { code: "12", de: "Metallformgebung", en: "Metal Shaping" },
  { code: "13", de: "Ölabfälle", en: "Waste Oils" },
  { code: "14", de: "Lösemittel", en: "Solvents" },
  { code: "15", de: "Verpackung", en: "Packaging" },
  { code: "16", de: "Sonstige", en: "Miscellaneous" },
  { code: "17", de: "Bau & Abbruch", en: "Construction" },
  { code: "18", de: "Medizin", en: "Medical" },
  { code: "19", de: "Abfallbehandlung", en: "Waste Treatment" },
  { code: "20", de: "Siedlungsabfall", en: "Municipal Waste" },
];

export const chapterMap = new Map(chapters.map((c) => [c.code, c]));
