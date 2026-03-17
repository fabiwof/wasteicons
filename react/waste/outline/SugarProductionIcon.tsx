import { forwardRef } from "react";

const SugarProductionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 10 8-4 8 4v8l-8 4-8-4z"/><path stroke="currentColor" d="m4 10 8 4 8-4m-8 4v8" opacity=".3"/>
    </svg>
  )
);

SugarProductionIcon.displayName = "SugarProductionIcon";

export default SugarProductionIcon;
