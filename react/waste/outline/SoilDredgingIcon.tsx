import { forwardRef } from "react";

const SoilDredgingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 20c2-4 5-10 10-10s8 6 10 10z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m18 3-4 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 11-2-1 1-2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 17h3m2-2h2" opacity=".3"/>
    </svg>
  )
);

SoilDredgingIcon.displayName = "SoilDredgingIcon";

export default SoilDredgingIcon;
