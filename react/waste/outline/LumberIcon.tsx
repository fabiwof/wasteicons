import { forwardRef } from "react";

const LumberIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="20" height="10" x="2" y="7" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M5 7v10m6-10v10m6-10v10" opacity=".3"/><circle cx="8" cy="12" r="1.5" stroke="currentColor" strokeWidth=".75" opacity=".3"/><circle cx="14" cy="10" r="1" stroke="currentColor" strokeWidth=".75" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M3 11c1 0 2 1 3 1" opacity=".3"/>
    </svg>
  )
);

LumberIcon.displayName = "LumberIcon";

export default LumberIcon;
