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
      <rect width="10" height="14" x="4" y="6" fill="currentColor" rx="1"/><path fill="currentColor" d="M7 4h4v2H7z"/><path stroke="#fff" d="M4 10h10" opacity=".3"/><circle cx="9" cy="15" r="2" fill="#fff" opacity=".2"/><path fill="currentColor" d="m19 10 2.5 4.5h-5z"/><path stroke="#fff" strokeLinecap="round" strokeWidth="1.2" d="M19 11.5v1.2"/><circle cx="19" cy="13.7" r=".4" fill="#fff"/>
    </svg>
  )
);

HazardousPaintIcon.displayName = "HazardousPaintIcon";

export default HazardousPaintIcon;
