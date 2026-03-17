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
      <circle cx="12" cy="12" r="7" fill="currentColor"/><circle cx="12" cy="12" r="3" fill="#fff" opacity=".2"/><circle cx="12" cy="12" r="1" fill="currentColor"/><rect width="3" height="2" x="19" y="11" fill="currentColor" rx=".5"/><rect width="3" height="2" x="2" y="11" fill="currentColor" rx=".5"/><rect width="2" height="2" x="11" y="3" fill="currentColor" opacity=".3" rx=".5"/><rect width="2" height="2" x="11" y="19" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

MechanicalShapingIcon.displayName = "MechanicalShapingIcon";

export default MechanicalShapingIcon;
