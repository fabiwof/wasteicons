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
      <rect width="14" height="14" x="5" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M5 10h14"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 6V4h8v2"/><circle cx="12" cy="15" r="2.5" stroke="currentColor" opacity=".4"/>
    </svg>
  )
);

PaintMunicipalIcon.displayName = "PaintMunicipalIcon";

export default PaintMunicipalIcon;
