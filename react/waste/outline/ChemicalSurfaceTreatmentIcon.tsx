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
      <rect width="18" height="12" x="3" y="8" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M3 13h18"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 4v4m-2-4h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 16h8" opacity=".3"/>
    </svg>
  )
);

ChemicalSurfaceTreatmentIcon.displayName = "ChemicalSurfaceTreatmentIcon";

export default ChemicalSurfaceTreatmentIcon;
