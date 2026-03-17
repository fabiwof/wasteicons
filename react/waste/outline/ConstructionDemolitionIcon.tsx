import { forwardRef } from "react";

const ConstructionDemolitionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 11 8-7 8 7"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 10v10h12V10"/><path stroke="currentColor" d="M10 14h4v6h-4z" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m14 4 4 4m0-4-4 4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 13h3m2 0h3" opacity=".3"/>
    </svg>
  )
);

ConstructionDemolitionIcon.displayName = "ConstructionDemolitionIcon";

export default ConstructionDemolitionIcon;
