import { forwardRef } from "react";

const NonMetallicMineralsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="12" x="3" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth=".75" d="M3 10h18M3 14h18" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M8 6v12m5-12v12m5-12v12" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m1 8 2-2m18 2 2-2"/>
    </svg>
  )
);

NonMetallicMineralsIcon.displayName = "NonMetallicMineralsIcon";

export default NonMetallicMineralsIcon;
