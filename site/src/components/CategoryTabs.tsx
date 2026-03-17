import { useLanguage } from "../context/LanguageContext";
import { t } from "../data/ui-strings";

export type Category = "all" | "waste" | "container";

interface CategoryTabsProps {
  active: Category;
  onChange: (category: Category) => void;
  counts: { all: number; waste: number; container: number };
}

const tabs: { key: Category; labelKey: "categoryAll" | "categoryWaste" | "categoryContainer"; detail: string }[] = [
  { key: "all", labelKey: "categoryAll", detail: "" },
  { key: "waste", labelKey: "categoryWaste", detail: "24\u00d724, 1.5px stroke" },
  { key: "container", labelKey: "categoryContainer", detail: "40\u00d728, 1.5px stroke" },
];

export default function CategoryTabs({
  active,
  onChange,
  counts,
}: CategoryTabsProps) {
  const { language } = useLanguage();
  const activeTab = tabs.find((t) => t.key === active);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex gap-3">
        {tabs.map(({ key, labelKey }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === key
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            {t(labelKey, language)}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
        {activeTab && activeTab.key !== "all" && (
          <>
            <span className="font-semibold text-slate-900">{t(activeTab.labelKey, language)}</span>
            <span>{activeTab.detail}</span>
          </>
        )}
        {activeTab && activeTab.key === "all" && (
          <span>{counts.all} {t("nIcons", language)}</span>
        )}
      </div>
    </div>
  );
}
