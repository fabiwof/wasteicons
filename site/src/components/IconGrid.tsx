import type { IconEntry } from "../data/icons";
import IconCard from "./IconCard";

interface IconGridProps {
  icons: IconEntry[];
}

export default function IconGrid({ icons }: IconGridProps) {
  if (icons.length === 0) {
    return (
      <p className="py-16 text-center text-slate-400 text-sm">
        Keine Icons gefunden.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {icons.map((icon) => (
        <IconCard key={`${icon.category}-${icon.slug}`} icon={icon} />
      ))}
    </div>
  );
}
