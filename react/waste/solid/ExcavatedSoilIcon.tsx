import { forwardRef } from "react";

const ExcavatedSoilIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M2 20C4 15 7 8 12 8s8 7 10 12z" opacity=".25"/><rect width="3" height="1" x="6" y="16.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="3" height="1" x="11" y="13.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="2" height="1" x="16" y="16.5" fill="currentColor" opacity=".15" rx=".5"/><path fill="currentColor" d="M8 12c1.5-1 3-1 4 0" opacity=".1"/>
    </svg>
  )
);

ExcavatedSoilIcon.displayName = "ExcavatedSoilIcon";

export default ExcavatedSoilIcon;
