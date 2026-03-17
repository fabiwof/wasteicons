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
      <path fill="currentColor" d="M5 4h14l-2 17H7z"/><path fill="currentColor" d="M5 3h14v2H5z"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="m9 10 6-3" opacity=".2"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="m8 16 8-4" opacity=".2"/>
    </svg>
  )
);

GlassManufacturingIcon.displayName = "GlassManufacturingIcon";

export default GlassManufacturingIcon;
