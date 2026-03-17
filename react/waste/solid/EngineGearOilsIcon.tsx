import { forwardRef } from "react";

const EngineGearOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="10" cy="10" r="4" fill="currentColor"/><circle cx="10" cy="10" r="1.5" fill="#fff" opacity=".3"/><rect width="2" height="2" x="9" y="4" fill="currentColor" rx=".5"/><rect width="2" height="2" x="9" y="14" fill="currentColor" rx=".5"/><rect width="2" height="2" x="4" y="9" fill="currentColor" rx=".5"/><rect width="2" height="2" x="14" y="9" fill="currentColor" rx=".5"/><path fill="currentColor" d="M18 13c-1 2-2 3-2 5a2 2 0 0 0 4 0c0-2-1-3-2-5"/>
    </svg>
  )
);

EngineGearOilsIcon.displayName = "EngineGearOilsIcon";

export default EngineGearOilsIcon;
