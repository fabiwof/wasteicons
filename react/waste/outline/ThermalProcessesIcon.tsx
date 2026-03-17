import { forwardRef } from "react";

const ThermalProcessesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="15" x="4" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 18c-2 0-3-2-3-4 0-1.5 1.5-3 3-5 1.5 2 3 3.5 3 5 0 2-1 4-3 4z"/>
    </svg>
  )
);

ThermalProcessesIcon.displayName = "ThermalProcessesIcon";

export default ThermalProcessesIcon;
