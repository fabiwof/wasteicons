import { forwardRef } from "react";

const SaltsMetalOxidesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m12 3 7 9-7 9-7-9z"/><path stroke="currentColor" strokeWidth=".75" d="M5 12h14" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M12 3v18" opacity=".2"/>
    </svg>
  )
);

SaltsMetalOxidesIcon.displayName = "SaltsMetalOxidesIcon";

export default SaltsMetalOxidesIcon;
