import { useEffect, useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(
          (e.target as HTMLElement).tagName,
        )
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="py-5">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Alle Icons durchsuchen…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent py-1 pl-8 pr-8 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
        <kbd className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-400">
          /
        </kbd>
      </div>
    </div>
  );
}
