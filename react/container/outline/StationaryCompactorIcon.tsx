import { forwardRef } from "react";

const StationaryCompactorIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="18" x="2" y="6" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6V3h8v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 13 4 2-4 2"/><rect width="21" height="16" x="16" y="8" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeDasharray="2 1.5" strokeWidth=".75" d="M16 10v12" opacity=".4"/><path stroke="currentColor" strokeWidth=".75" d="M23 8v16m7-16v16" opacity=".25"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m37 12 2-4"/><circle cx="35" cy="26" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
);

StationaryCompactorIcon.displayName = "StationaryCompactorIcon";

export default StationaryCompactorIcon;
