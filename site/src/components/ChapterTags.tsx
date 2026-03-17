import { useRef, useEffect } from "react";
import { chapters } from "../data/chapters";
import { useLanguage } from "../context/LanguageContext";

interface ChapterTagsProps {
  activeChapter: string | null;
  onChange: (chapter: string | null) => void;
  availableChapters: Set<string>;
}

export default function ChapterTags({
  activeChapter,
  onChange,
  availableChapters,
}: ChapterTagsProps) {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const left = el.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeChapter]);

  const visible = chapters.filter((c) => availableChapters.has(c.code));
  if (visible.length === 0) return null;

  return (
    <div
      ref={scrollRef}
      className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
    >
      {visible.map(({ code, de, en }) => {
        const isActive = activeChapter === code;
        const label = language === "de" ? de : en;
        return (
          <button
            key={code}
            ref={isActive ? activeRef : undefined}
            onClick={() => onChange(isActive ? null : code)}
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {code} {label}
          </button>
        );
      })}
    </div>
  );
}
