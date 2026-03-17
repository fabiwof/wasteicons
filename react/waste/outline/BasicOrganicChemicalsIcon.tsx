import { forwardRef } from "react";

const BasicOrganicChemicalsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" d="M9 12h6"/><path stroke="currentColor" strokeLinecap="round" d="M6 9V6m12 3V6" opacity=".4"/>
    </svg>
  )
);

BasicOrganicChemicalsIcon.displayName = "BasicOrganicChemicalsIcon";

export default BasicOrganicChemicalsIcon;
