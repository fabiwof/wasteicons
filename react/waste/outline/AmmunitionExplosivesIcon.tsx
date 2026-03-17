import { forwardRef } from "react";

const AmmunitionExplosivesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m15 8 2-4"/><path stroke="currentColor" strokeLinecap="round" d="m17 4 2-1m-2 1 1 2" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" d="m19 2 1.5.5" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" d="M9 12a3 3 0 0 1 3-3" opacity=".4"/>
    </svg>
  )
);

AmmunitionExplosivesIcon.displayName = "AmmunitionExplosivesIcon";

export default AmmunitionExplosivesIcon;
