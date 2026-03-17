import { useLanguage, type Language } from "../context/LanguageContext";

const options: { key: Language; label: string }[] = [
  { key: "de", label: "DE" },
  { key: "en", label: "EN" },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-medium">
      {options.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setLanguage(key)}
          className={`rounded-md px-2.5 py-1 transition-colors ${
            language === key
              ? "bg-slate-900 text-white"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
