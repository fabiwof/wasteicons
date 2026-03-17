import { forwardRef } from "react";

const EndOfLifeVehiclesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 14h20v3H2z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 14 2-4h4l1-3h3l2 3h2l2 4"/><circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M11 10v4" opacity=".3"/>
    </svg>
  )
);

EndOfLifeVehiclesIcon.displayName = "EndOfLifeVehiclesIcon";

export default EndOfLifeVehiclesIcon;
