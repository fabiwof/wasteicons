import { forwardRef } from "react";

const PaintMunicipalIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="14" x="5" y="6" fill="currentColor" opacity=".2" rx="1"/><path fill="currentColor" d="M5 9.5h14V11H5z" opacity=".15"/><path fill="currentColor" d="M8 6V4h8v2" opacity=".3"/><circle cx="12" cy="15" r="2.5" fill="currentColor" opacity=".3"/>
    </svg>
  )
);

PaintMunicipalIcon.displayName = "PaintMunicipalIcon";

export default PaintMunicipalIcon;
