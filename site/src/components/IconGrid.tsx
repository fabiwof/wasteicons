import { useMemo } from "react";
import type { IconEntry } from "../data/icons";
import IconCard from "./IconCard";
import { chapterMap } from "../data/chapters";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../data/ui-strings";

interface IconGridProps {
  icons: IconEntry[];
}

type GridItem =
  | { type: "icon"; icon: IconEntry }
  | { type: "divider"; chapter: string; label: string };

export default function IconGrid({ icons }: IconGridProps) {
  const { language } = useLanguage();

  const items = useMemo(() => {
    const result: GridItem[] = [];
    let currentChapter = "";
    let currentCategory = "";

    for (const icon of icons) {
      // Category divider (waste → container)
      if (icon.category !== currentCategory) {
        if (currentCategory !== "" && icon.category === "container") {
          const label = language === "de" ? "Behälter" : "Containers";
          result.push({ type: "divider", chapter: "__container__", label });
        }
        currentCategory = icon.category;
      }

      // Chapter divider within waste icons
      if (icon.category === "waste") {
        const ch = icon.chapter || "__none__";
        if (ch !== currentChapter && ch !== "__none__") {
          const info = chapterMap.get(ch);
          const label = info
            ? `${ch} — ${language === "de" ? info.de : info.en}`
            : ch;
          result.push({ type: "divider", chapter: ch, label });
          currentChapter = ch;
        }
      }

      result.push({ type: "icon", icon });
    }
    return result;
  }, [icons, language]);

  if (icons.length === 0) {
    return (
      <p className="py-16 text-center text-slate-400 text-sm">
        {t("noIconsFound", language)}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {items.map((item) =>
        item.type === "divider" ? (
          <div
            key={`div-${item.chapter}`}
            id={`chapter-${item.chapter}`}
            className="col-span-full flex items-center gap-2 pt-4 first:pt-0"
          >
            <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
              {item.label}
            </span>
            <div className="flex-1 border-t border-slate-100" />
          </div>
        ) : (
          <IconCard
            key={`${item.icon.category}-${item.icon.slug}`}
            icon={item.icon}
          />
        ),
      )}
    </div>
  );
}
