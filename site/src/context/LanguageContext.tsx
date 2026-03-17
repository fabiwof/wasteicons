import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "de" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "de",
  setLanguage: () => {},
});

const STORAGE_KEY = "wasteicons-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "de") return stored;
    } catch {}
    return "de";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {}
  }, [language]);

  return (
    <LanguageContext value={{ language, setLanguage: setLanguageState }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
