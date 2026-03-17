import { forwardRef } from "react";

const OilWaterSeparatorIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="14" x="3" y="5" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M3 12h18"/><path stroke="currentColor" strokeWidth="1.5" d="M12 5v14"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M5 9h5m4 6h5" opacity=".3"/>
    </svg>
  )
);

OilWaterSeparatorIcon.displayName = "OilWaterSeparatorIcon";

export default OilWaterSeparatorIcon;
