import { useState, useMemo } from "react";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import CategoryTabs, { type Category } from "./components/CategoryTabs";
import IconGrid from "./components/IconGrid";
import { allIcons } from "./data/icons";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const filteredIcons = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allIcons.filter((icon) => {
      if (category !== "all" && icon.category !== category) return false;
      if (q && !icon.searchTerms.includes(q)) return false;
      return true;
    });
  }, [searchQuery, category]);

  const counts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const matching = q
      ? allIcons.filter((icon) => icon.searchTerms.includes(q))
      : allIcons;
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
        <a
          href="https://schaffsch.de"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          Gebaut von
          <img src="/schaffsch.svg" alt="SCHAFFSCH" className="h-3.5 opacity-40 hover:opacity-70 transition-opacity" />
        </a>
      </footer>
    </div>
  );
}
