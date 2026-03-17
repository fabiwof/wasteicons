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
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" stroke="currentColor" opacity=".4" rx="3" ry="8"/><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
);

HalogenChemistryIcon.displayName = "HalogenChemistryIcon";

export default HalogenChemistryIcon;
