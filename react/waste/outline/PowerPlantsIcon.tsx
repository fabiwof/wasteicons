import { forwardRef } from "react";

const PowerPlantsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeWidth="1.5" d="M6 21c0-6 2-10 6-10s6 4 6 10"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 21h12"/><path stroke="currentColor" strokeLinecap="round" d="M9 6c0-2 1.5-3 3-3s3 1 3 3" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 4c0-1 .8-2 2-2s2 1 2 2" opacity=".3"/>
    </svg>
  )
);

PowerPlantsIcon.displayName = "PowerPlantsIcon";

export default PowerPlantsIcon;
