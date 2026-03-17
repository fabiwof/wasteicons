import { forwardRef } from "react";

const SprayCoatingsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="10" height="14" x="6" y="7" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7V5h4v2"/><circle cx="11" cy="14" r="2.5" stroke="currentColor" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11 3v2"/><path stroke="currentColor" strokeLinecap="round" d="M15 4h3" opacity=".4"/>
    </svg>
  )
);

SprayCoatingsIcon.displayName = "SprayCoatingsIcon";

export default SprayCoatingsIcon;
