import { useState, useMemo, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import CategoryTabs, { type Category } from "./components/CategoryTabs";
import IconGrid from "./components/IconGrid";
import { allIcons } from "./data/icons";
import { initSearch, search } from "./lib/search";
import { useLanguage } from "./context/LanguageContext";
import { t } from "./data/ui-strings";

export default function App() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  useEffect(() => {
    initSearch(allIcons);
  }, []);

  const filteredIcons = useMemo(() => {
    const q = searchQuery.trim();
    let icons = allIcons;

    if (q) {
      const matchIds = search(q);
      icons = icons.filter((icon) =>
        matchIds.has(`${icon.category}-${icon.slug}`),
      );
    }

    if (category !== "all") {
      icons = icons.filter((icon) => icon.category === category);
    }

    return icons;
  }, [searchQuery, category]);

  const counts = useMemo(() => {
    const q = searchQuery.trim();
    let matching = allIcons;
    if (q) {
      const matchIds = search(q);
      matching = allIcons.filter((icon) =>
        matchIds.has(`${icon.category}-${icon.slug}`),
      );
    }
    return {
      all: matching.length,
      waste: matching.filter((i) => i.category === "waste").length,
      container: matching.filter((i) => i.category === "container").length,
    };
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeroSection />

      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryTabs
            active={category}
            onChange={setCategory}
            counts={counts}
          />
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 w-full">
        <IconGrid icons={filteredIcons} />
      </main>

      <footer className="border-t border-slate-100 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm text-slate-400">
          <a
            href="https://www.schaffsch.de"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 hover:text-slate-600 transition-colors"
          >
            {t("builtBy", language)}
            <img src="/schaffsch.svg" alt="SCHAFFSCH" className="h-3.5 opacity-40 hover:opacity-70 transition-opacity" />
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://www.schaffsch.de/impressum"
            target="_blank"
            rel="noopener"
            className="hover:text-slate-600 transition-colors"
          >
            {t("legalNotice", language)}
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://www.schaffsch.de/datenschutz"
            target="_blank"
            rel="noopener"
            className="hover:text-slate-600 transition-colors"
          >
            {t("privacyPolicy", language)}
          </a>
        </div>
      </footer>
    </div>
  );
}
