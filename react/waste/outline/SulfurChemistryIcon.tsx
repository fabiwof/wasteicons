import { forwardRef } from "react";

const SulfurChemistryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M16 7c0-2-2-3-4-3S8 5 8 7s2 3 4 5 4 3 4 5-2 3-4 3-4-1-4-3"/>
    </svg>
  )
);

SulfurChemistryIcon.displayName = "SulfurChemistryIcon";

export default SulfurChemistryIcon;
