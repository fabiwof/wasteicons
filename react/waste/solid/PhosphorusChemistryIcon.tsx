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
      <circle cx="12" cy="8" r="4" fill="currentColor"/><path fill="currentColor" d="M11 12h2v5h-2z"/><rect width="8" height="2" x="8" y="19" fill="currentColor" rx="1"/><rect width="4" height="2" x="12" y="16" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

PhosphorusChemistryIcon.displayName = "PhosphorusChemistryIcon";

export default PhosphorusChemistryIcon;
