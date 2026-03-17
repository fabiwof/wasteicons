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
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 12h7m4 0h7"/><rect width="4" height="8" x="10" y="8" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 5v3m0 8v3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 5h4"/>
    </svg>
  )
);

GasPurificationIcon.displayName = "GasPurificationIcon";

export default GasPurificationIcon;
