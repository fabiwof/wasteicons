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
      <path fill="currentColor" fillRule="evenodd" d="M16 7c0-2.2-1.8-4-4-4S8 4.8 8 7c0 2 2 3.5 4 5.5s4 3.5 4 5.5c0 2.2-1.8 4-4 4s-4-1.8-4-4"/><path fill="currentColor" d="M16 7c0-2-2-3-4-3S8 5 8 7s2 3 4 5 4 3 4 5-2 3-4 3-4-1-4-3"/>
    </svg>
  )
);

SulfurChemistryIcon.displayName = "SulfurChemistryIcon";

export default SulfurChemistryIcon;
