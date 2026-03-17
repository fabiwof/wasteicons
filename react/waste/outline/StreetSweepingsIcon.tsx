import { forwardRef } from "react";

const StreetSweepingsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 2v10"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h8l1 3H7z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m7 15-1 6h12l-1-6"/><path stroke="currentColor" strokeWidth=".75" d="M9 15v5m2-5v5m2-5v5m2-5v5" opacity=".3"/>
    </svg>
  )
);

StreetSweepingsIcon.displayName = "StreetSweepingsIcon";

export default StreetSweepingsIcon;
