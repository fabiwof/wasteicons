import { forwardRef } from "react";

const GasPurificationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="7" height="2" x="3" y="11" fill="currentColor" rx=".5"/><rect width="7" height="2" x="14" y="11" fill="currentColor" rx=".5"/><rect width="4" height="8" x="10" y="8" fill="currentColor" rx="1"/><rect width="1.5" height="3" x="11.25" y="5" fill="currentColor" opacity=".7" rx=".5"/><rect width="1.5" height="3" x="11.25" y="16" fill="currentColor" opacity=".7" rx=".5"/><rect width="4" height="1.5" x="10" y="4.5" fill="currentColor" rx=".5"/>
    </svg>
  )
);

GasPurificationIcon.displayName = "GasPurificationIcon";

export default GasPurificationIcon;
