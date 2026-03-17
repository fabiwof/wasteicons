import { forwardRef } from "react";

const ChemicalSurfaceTreatmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="12" x="3" y="8" fill="currentColor" rx="1"/><path fill="#fff" d="M3 13h18v1H3z" opacity=".2"/><rect width="4" height="4" x="10" y="4" fill="currentColor" opacity=".3" rx=".5"/><rect width="2" height="5" x="11" y="3.5" fill="currentColor" rx=".5"/><rect width="8" height="1" x="8" y="15.5" fill="#fff" opacity=".2" rx=".5"/>
    </svg>
  )
);

ChemicalSurfaceTreatmentIcon.displayName = "ChemicalSurfaceTreatmentIcon";

export default ChemicalSurfaceTreatmentIcon;
