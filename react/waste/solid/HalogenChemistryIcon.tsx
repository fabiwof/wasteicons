import { forwardRef } from "react";

const HalogenChemistryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="8" fill="currentColor"/><ellipse cx="12" cy="12" fill="#fff" opacity=".2" rx="3" ry="8"/><circle cx="12" cy="12" r="2" fill="#fff" opacity=".3"/>
    </svg>
  )
);

HalogenChemistryIcon.displayName = "HalogenChemistryIcon";

export default HalogenChemistryIcon;
