import { forwardRef } from "react";

const GlassManufacturingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 4h14l-2 17H7z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 4h14"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="m9 10 6-3m-7 9 8-4" opacity=".3"/>
    </svg>
  )
);

GlassManufacturingIcon.displayName = "GlassManufacturingIcon";

export default GlassManufacturingIcon;
