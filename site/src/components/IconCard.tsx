import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconEntry } from "../data/icons";
import { copyToClipboard } from "../lib/clipboard";
import { svgToJsx } from "../lib/svg-to-jsx";

interface IconCardProps {
  icon: IconEntry;
}

export default function IconCard({ icon }: IconCardProps) {
  const [copied, setCopied] = useState<"svg" | "jsx" | null>(null);

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

  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative w-full aspect-square rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
        <div
          className={`flex items-center justify-center text-slate-700 group-hover:text-slate-900 transition-colors ${
            icon.category === "container" ? "w-8 h-6" : "w-6 h-6"
          }`}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
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
              <div
                className={`flex items-center justify-center text-slate-700 ${
                  icon.category === "container" ? "w-8 h-6" : "w-6 h-6"
                }`}
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
              <span className="text-xs font-semibold text-rust-500">
                Copied!
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[11px] text-slate-500 truncate w-full text-center leading-tight">
        {icon.name}
      </span>
    </div>
  );
}
