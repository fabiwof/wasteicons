import { forwardRef } from "react";

const MechanicalShapingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12h3M2 12h3"/><path stroke="currentColor" strokeLinecap="round" d="M12 5V3m0 18v-2" opacity=".4"/>
    </svg>
  )
);

MechanicalShapingIcon.displayName = "MechanicalShapingIcon";

export default MechanicalShapingIcon;
