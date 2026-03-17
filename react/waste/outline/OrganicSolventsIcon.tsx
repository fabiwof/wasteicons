import { forwardRef } from "react";

const OrganicSolventsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="10" height="13" x="6" y="8" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 8V5h4v3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11 3v2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 5h3l1-2" opacity=".4"/><path stroke="currentColor" strokeWidth=".75" d="M6 14h10" opacity=".3"/>
    </svg>
  )
);

OrganicSolventsIcon.displayName = "OrganicSolventsIcon";

export default OrganicSolventsIcon;
