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
      <rect width="12" height="14" x="3" y="6" fill="currentColor" opacity=".2" rx="1"/><path fill="currentColor" d="M3 9.5h12V11H3z" opacity=".15"/><path fill="currentColor" d="M6 6V4h4v2" opacity=".3"/><rect width="4" height="1" x="7" y="13.5" fill="currentColor" opacity=".15" rx=".5"/><g><path fill="currentColor" d="m19 10 2.5 4.5h-5z" opacity=".6"/><circle cx="19" cy="14" r=".5" fill="#fff"/><rect width=".8" height="1.5" x="18.6" y="11.8" fill="#fff" rx=".4"/></g>
    </svg>
  )
);

HazardousPaintMunicipalIcon.displayName = "HazardousPaintMunicipalIcon";

export default HazardousPaintMunicipalIcon;
