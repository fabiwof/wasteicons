import { forwardRef } from "react";

const WasteTreatmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 3h12v5l-4 4 4 4v5H6v-5l4-4-4-4z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 3h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 21h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 17h6" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 7h4" opacity=".3"/>
    </svg>
  )
);

WasteTreatmentIcon.displayName = "WasteTreatmentIcon";

export default WasteTreatmentIcon;
