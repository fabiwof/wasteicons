import { forwardRef } from "react";

const ConstructionPlasticIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 8h18v8H3z"/><ellipse cx="3" cy="12" stroke="currentColor" strokeWidth="1.5" rx="1" ry="4"/><ellipse cx="21" cy="12" stroke="currentColor" strokeWidth="1.5" rx="1" ry="4"/><path stroke="currentColor" strokeWidth=".75" d="M8 8v8m6-8v8" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M3 12h18" opacity=".3"/>
    </svg>
  )
);

ConstructionPlasticIcon.displayName = "ConstructionPlasticIcon";

export default ConstructionPlasticIcon;
