import { forwardRef } from "react";

const SurfaceTreatmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="11" x="4" y="10" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" rx="1"/><path stroke="currentColor" d="M4 15h16" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 4h4v6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 10V7h8v3" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 18h10" opacity=".3"/>
    </svg>
  )
);

SurfaceTreatmentIcon.displayName = "SurfaceTreatmentIcon";

export default SurfaceTreatmentIcon;
