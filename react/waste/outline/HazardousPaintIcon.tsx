import { forwardRef } from "react";

const HazardousPaintIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="10" height="14" x="4" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M4 10h10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 6V4h4v2"/><circle cx="9" cy="15" r="2" stroke="currentColor" opacity=".4"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

HazardousPaintIcon.displayName = "HazardousPaintIcon";

export default HazardousPaintIcon;
