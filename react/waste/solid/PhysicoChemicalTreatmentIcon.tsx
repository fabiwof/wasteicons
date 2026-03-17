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
      <path fill="currentColor" d="M7 3h10v4l-4 5 4 5v4H7v-4l4-5-4-5z" opacity=".2"/><rect width="10" height="1.5" x="7" y="2.5" fill="currentColor" rx=".75"/><rect width="10" height="1.5" x="7" y="20.5" fill="currentColor" rx=".75"/><rect width="4" height="1" x="10" y="14.5" fill="currentColor" opacity=".15" rx=".5"/><circle cx="12" cy="12" r="1" fill="currentColor" opacity=".3"/>
    </svg>
  )
);

PhysicoChemicalTreatmentIcon.displayName = "PhysicoChemicalTreatmentIcon";

export default PhysicoChemicalTreatmentIcon;
