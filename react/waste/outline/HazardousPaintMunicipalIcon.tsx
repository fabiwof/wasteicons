import { forwardRef } from "react";

const HazardousPaintMunicipalIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="12" height="14" x="3" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M3 10h12"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 6V4h4v2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 14h4" opacity=".3"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

HazardousPaintMunicipalIcon.displayName = "HazardousPaintMunicipalIcon";

export default HazardousPaintMunicipalIcon;
