import { forwardRef } from "react";

const AgricultureFarmingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 11 9-7 9 7"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 10v10h14V10"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 20v-6h4v6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M5 15h14" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M12 4v3" opacity=".4"/>
    </svg>
  )
);

AgricultureFarmingIcon.displayName = "AgricultureFarmingIcon";

export default AgricultureFarmingIcon;
