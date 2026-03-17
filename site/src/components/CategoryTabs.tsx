export type Category = "all" | "waste" | "container";

interface CategoryTabsProps {
  active: Category;
  onChange: (category: Category) => void;
  counts: { all: number; waste: number; container: number };
}

const tabs: { key: Category; label: string; detail: string }[] = [
  { key: "all", label: "Alle", detail: "" },
  { key: "waste", label: "Abfall", detail: "24×24, 1.5px stroke" },
  { key: "container", label: "Behälter", detail: "40×28, 1.5px stroke" },
];

export default function CategoryTabs({
  active,
  onChange,
  counts,
}: CategoryTabsProps) {
  const activeTab = tabs.find((t) => t.key === active);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex gap-3">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === key
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
        {activeTab && activeTab.key !== "all" && (
          <>
            <span className="font-semibold text-slate-900">{activeTab.label}</span>
            <span>{activeTab.detail}</span>
          </>
        )}
        {activeTab && activeTab.key === "all" && (
          <span>{counts.all} Icons</span>
        )}
      </div>
    </div>
  );
}
