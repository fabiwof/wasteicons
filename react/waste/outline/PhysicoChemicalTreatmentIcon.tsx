import { forwardRef } from "react";

const PhysicoChemicalTreatmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 3h10v4l-4 5 4 5v4H7v-4l4-5-4-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3h10"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 21h10"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 15h4" opacity=".3"/><circle cx="12" cy="12" r="1" stroke="currentColor" opacity=".4"/>
    </svg>
  )
);

PhysicoChemicalTreatmentIcon.displayName = "PhysicoChemicalTreatmentIcon";

export default PhysicoChemicalTreatmentIcon;
