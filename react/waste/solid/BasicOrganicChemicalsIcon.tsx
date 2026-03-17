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
      <circle cx="6" cy="12" r="3" fill="currentColor"/><circle cx="18" cy="12" r="3" fill="currentColor"/><path fill="currentColor" d="M9 11h6v2H9z"/><path fill="currentColor" d="M5 6h2v3H5z" opacity=".3"/><path fill="currentColor" d="M17 6h2v3h-2z" opacity=".3"/>
    </svg>
  )
);

BasicOrganicChemicalsIcon.displayName = "BasicOrganicChemicalsIcon";

export default BasicOrganicChemicalsIcon;
