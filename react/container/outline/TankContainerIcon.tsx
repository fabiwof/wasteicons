import { forwardRef } from "react";

const TankContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 3v22M37 3v22"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 3h34M3 25h34"/><rect width="30" height="14" x="5" y="7" stroke="currentColor" strokeWidth="1.5" rx="7"/><path stroke="currentColor" strokeWidth=".75" d="m3 25 4-4m30 4-4-4M3 3l4 4m30-4-4 4" opacity=".3"/><rect width="4" height="2" x="13" y="3" stroke="currentColor" strokeWidth=".75" opacity=".5" rx=".5"/><rect width="4" height="2" x="23" y="3" stroke="currentColor" strokeWidth=".75" opacity=".5" rx=".5"/>
    </svg>
  )
);

TankContainerIcon.displayName = "TankContainerIcon";

export default TankContainerIcon;
