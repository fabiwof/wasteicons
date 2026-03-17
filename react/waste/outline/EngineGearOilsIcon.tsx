import { forwardRef } from "react";

const EngineGearOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="1.5" stroke="currentColor" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 4v2m0 8v2m-6-6h2m8 0h2"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M18 13c-1 2-2 3-2 5a2 2 0 0 0 4 0c0-2-1-3-2-5z"/>
    </svg>
  )
);

EngineGearOilsIcon.displayName = "EngineGearOilsIcon";

export default EngineGearOilsIcon;
