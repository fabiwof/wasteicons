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
      <circle cx="12" cy="14" r="7" fill="currentColor" opacity=".25"/><rect width="1.3" height="5.5" x="14.5" y="3.5" fill="currentColor" rx=".65" transform="rotate(-25 15 6)"/><circle cx="18" cy="3.5" r="1" fill="currentColor" opacity=".5"/><rect width="2" height=".8" x="17.5" y="3" fill="currentColor" opacity=".4" rx=".4"/><path d="M9 12a3 3 0 0 1 3-3"/><path fill="currentColor" d="M9 11.5q.75-2.25 3-3" opacity=".2"/>
    </svg>
  )
);

AmmunitionExplosivesIcon.displayName = "AmmunitionExplosivesIcon";

export default AmmunitionExplosivesIcon;
