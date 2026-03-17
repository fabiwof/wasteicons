import { forwardRef } from "react";

const TankCleaningIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="12" cy="6" stroke="currentColor" strokeWidth="1.5" rx="7" ry="2.5"/><path stroke="currentColor" strokeWidth="1.5" d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/><path stroke="currentColor" strokeWidth=".75" d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3V1"/><path stroke="currentColor" strokeLinecap="round" d="M10 1h4" opacity=".4"/>
    </svg>
  )
);

TankCleaningIcon.displayName = "TankCleaningIcon";

export default TankCleaningIcon;
