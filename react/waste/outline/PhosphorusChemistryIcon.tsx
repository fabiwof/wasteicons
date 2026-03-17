import { forwardRef } from "react";

const PhosphorusChemistryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 12v5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 20h8"/><path stroke="currentColor" strokeLinecap="round" d="M12 17h4" opacity=".4"/>
    </svg>
  )
);

PhosphorusChemistryIcon.displayName = "PhosphorusChemistryIcon";

export default PhosphorusChemistryIcon;
