import { forwardRef } from "react";

const SoilRemediationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 20c3-5 6-10 10-10s7 5 10 10z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 2v8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 6 3-4 3 4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 16h3m3-2h2" opacity=".3"/>
    </svg>
  )
);

SoilRemediationIcon.displayName = "SoilRemediationIcon";

export default SoilRemediationIcon;
