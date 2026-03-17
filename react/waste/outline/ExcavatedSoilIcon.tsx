import { forwardRef } from "react";

const ExcavatedSoilIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 20C4 15 7 8 12 8s8 7 10 12z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 17h3m2-3h3m2 3h2" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 12c1.5-1 3-1 4 0" opacity=".3"/>
    </svg>
  )
);

ExcavatedSoilIcon.displayName = "ExcavatedSoilIcon";

export default ExcavatedSoilIcon;
