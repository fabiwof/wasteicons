import { allIcons } from "../data/icons";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../data/ui-strings";
import { version } from "../data/version";
import LanguageToggle from "./LanguageToggle";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-rust-50/40" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-rust-50/60 to-transparent" />

      {/* Techy SVG background pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fine grid */}
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0V80M0 80H80" stroke="#64748b" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="500" fill="url(#grid)" />

        {/* Sparse dashed diagonals */}
        <line x1="100" y1="0" x2="700" y2="500" stroke="#64748b" strokeWidth="0.5" strokeDasharray="6 10" />
        <line x1="500" y1="0" x2="1100" y2="500" stroke="#64748b" strokeWidth="0.5" strokeDasharray="6 10" />
        <line x1="900" y1="0" x2="500" y2="400" stroke="#64748b" strokeWidth="0.5" strokeDasharray="6 10" />

        {/* A few dots */}
        <circle cx="240" cy="160" r="2" fill="#64748b" />
        <circle cx="720" cy="320" r="2" fill="#64748b" />
        <circle cx="960" cy="80" r="2" fill="#64748b" />

        {/* Subtle ring */}
        <circle cx="160" cy="380" r="30" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="1040" cy="120" r="20" stroke="#64748b" strokeWidth="0.5" strokeDasharray="3 4" />

        {/* Crosshair */}
        <line x1="590" y1="250" x2="610" y2="250" stroke="#64748b" strokeWidth="0.5" />
        <line x1="600" y1="240" x2="600" y2="260" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="600" cy="250" r="8" stroke="#64748b" strokeWidth="0.4" />

        {/* Corner brackets */}
        <path d="M420 80h16v16" stroke="#64748b" strokeWidth="0.5" />
        <path d="M852 340h16v16" stroke="#64748b" strokeWidth="0.5" />

        {/* Edge fade */}
        <defs>
          <radialGradient id="fade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="1200" height="500" fill="url(#fade)" />
      </svg>

      <header className="relative">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-7 text-rust-600" viewBox="0 0 40 28" fill="none" stroke="currentColor">
              <rect width="34" height="14" x="3" y="10" strokeWidth="1.5" rx=".5"/>
              <path strokeWidth=".75" d="M9 10v14m6-14v14m6-14v14m6-14v14m6-14v14" opacity=".25"/>
              <path strokeLinecap="round" strokeWidth="2" d="m3 14-2-4"/>
              <circle cx="35" cy="26" r="1.5" strokeWidth="1.2"/>
            </svg>
            <span className="text-xl font-bold text-slate-900 tracking-tight">wasteicons</span>
            <span className="ml-1 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-500">
              v{version}
            </span>
          </div>
          <LanguageToggle />
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side */}
            <div>
              <p className="text-sm font-medium text-slate-500 flex items-center gap-2 flex-wrap">
                <span>{allIcons.length} {t("nIcons", language)}</span>
                <span className="text-slate-300">&middot;</span>
                <span>{t("license", language)}</span>
                <span className="text-slate-300">&middot;</span>
                <span>React &amp; SVG</span>
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  {t("heroSubline", language)}
              </h1>
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <a
                  href="https://github.com/fabiwof/wasteicons"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg px-3 py-2 -ml-3 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {t("docs", language)}
                </a>
              </div>
            </div>

            {/* Right side — decorative icons */}
            <div className="hidden lg:flex items-center justify-center gap-6">
              {/* Half Shell Container */}
              <svg
                className="w-60 h-42 text-rust-500"
                viewBox="0 0 40 28"
                fill="none"
                stroke="currentColor"
              >
                <rect width="34" height="14" x="3" y="10" strokeWidth="0.5" rx=".5"/>
                <path strokeWidth=".25" d="M9 10v14m6-14v14m6-14v14m6-14v14m6-14v14" opacity=".25"/>
                <path strokeLinecap="round" strokeWidth="0.7" d="m3 14-2-4"/>
                <circle cx="35" cy="26" r="1.5" strokeWidth="0.4"/>
              </svg>
              {/* Skip Container */}
              <svg
                className="w-60 h-42 text-rust-500"
                viewBox="0 0 40 28"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinejoin="round" strokeWidth="0.5" d="M13 23 5 10l5-6h20l5 6-8 13z"/>
                <path strokeLinecap="round" strokeWidth="0.4" d="M7 12h26"/>
                <circle cx="15" cy="9" r="1.2" strokeWidth="0.4"/>
                <circle cx="25" cy="9" r="1.2" strokeWidth="0.4"/>
                <path strokeLinejoin="round" strokeWidth="0.5" d="m13 23-2 3 2-1"/>
              </svg>
              {/* Brick */}
              <svg
                className="w-48 h-48 text-rust-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect width="18" height="16" x="3" y="4" strokeWidth="0.5" rx=".5"/>
                <path strokeWidth="0.5" d="M3 8h18M3 12h18M3 16h18"/>
                <path strokeWidth="0.35" d="M10 4v4m6-4v4M7 8v4m6-4v4m-3 0v4m6-4v4m-9 0v4m6-4v4" opacity=".4"/>
              </svg>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}
