import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconEntry } from "../data/icons";
import { copyToClipboard } from "../lib/clipboard";
import { svgToJsx } from "../lib/svg-to-jsx";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../data/ui-strings";

interface IconCardProps {
  icon: IconEntry;
}

function formatAvvCode(code: string): string {
  if (code.length === 6) return `${code.slice(0, 2)} ${code.slice(2, 4)} ${code.slice(4)}`;
  if (code.length === 4) return `${code.slice(0, 2)} ${code.slice(2)}`;
  return code;
}

/** Extract viewBox and inner content from an SVG string so we can render
 *  a proper <svg> React element. This avoids the iOS Safari bug where
 *  innerHTML on a <div> doesn't apply the SVG namespace. */
function parseSvg(raw: string): { viewBox: string; inner: string } {
  const viewBoxMatch = raw.match(/viewBox="([^"]+)"/);
  const innerMatch = raw.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  return {
    viewBox: viewBoxMatch?.[1] ?? "0 0 24 24",
    inner: innerMatch?.[1] ?? "",
  };
}

const MAX_BADGES = 3;

export default function IconCard({ icon }: IconCardProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState<"svg" | "jsx" | null>(null);
  const { viewBox, inner } = useMemo(() => parseSvg(icon.svg), [icon.svg]);

  const handleCopy = useCallback(
    async (e: React.MouseEvent, type: "svg" | "jsx") => {
      e.stopPropagation();
      const text = type === "svg" ? icon.svg : svgToJsx(icon.svg);
      const ok = await copyToClipboard(text);
      if (ok) {
        setCopied(type);
        setTimeout(() => setCopied(null), 1500);
      }
    },
    [icon.svg],
  );

  const displayName = language === "de" ? icon.nameDe : icon.name;
  const visibleCodes = icon.avvCodes.slice(0, MAX_BADGES);
  const extraCount = icon.avvCodes.length - MAX_BADGES;

  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative w-full aspect-square rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={viewBox}
          className={`text-slate-700 group-hover:text-slate-900 transition-colors ${
            icon.category === "container" ? "w-8 h-6" : "w-6 h-6"
          }`}
          dangerouslySetInnerHTML={{ __html: inner }}
        />

        {/* Hover overlay — two clickable halves like heroicons */}
        {!copied && (
          <div className="absolute inset-0 flex flex-col rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <button
              onClick={(e) => handleCopy(e, "svg")}
              className="flex-1 flex items-center justify-center rounded-t-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Copy SVG
            </button>
            <div className="border-t border-slate-200 mx-3" />
            <button
              onClick={(e) => handleCopy(e, "jsx")}
              className="flex-1 flex items-center justify-center rounded-b-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Copy JSX
            </button>
          </div>
        )}

        {/* Copied confirmation — animated */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-white border border-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox={viewBox}
                className={`text-slate-700 ${
                  icon.category === "container" ? "w-8 h-6" : "w-6 h-6"
                }`}
                dangerouslySetInnerHTML={{ __html: inner }}
              />
              <span className="text-xs font-semibold text-rust-500">
                {t("copied", language)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[11px] text-slate-500 truncate w-full text-center leading-tight">
        {displayName}
      </span>
      {visibleCodes.length > 0 && (
        <div className="mt-0.5 flex items-center gap-0.5 flex-wrap justify-center">
          {visibleCodes.map((code) => (
            <span
              key={code}
              className="text-[9px] font-mono text-slate-400 bg-slate-50 rounded px-1 py-px leading-tight"
            >
              AVV {formatAvvCode(code)}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="text-[9px] text-slate-400">
              +{extraCount}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
