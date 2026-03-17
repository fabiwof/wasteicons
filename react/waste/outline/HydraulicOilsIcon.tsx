import { forwardRef } from "react";

const HydraulicOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="8" height="10" x="4" y="10" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 4v6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 4h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 15h8"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 12v6"/>
    </svg>
  )
);

HydraulicOilsIcon.displayName = "HydraulicOilsIcon";

export default HydraulicOilsIcon;
