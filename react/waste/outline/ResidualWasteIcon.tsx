import { forwardRef } from "react";

const ResidualWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 6c1-1 3-2 5-2s4 1 5 2l2 14H5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 6q1.5 1.5 3 1.5c1.5 0 2-.5 3-1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3v3"/><path stroke="currentColor" strokeLinecap="round" d="M10 4 9 3m5 1 1-1" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 10c2 .5 4 .5 7 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 14c3 .5 5 .5 9 0" opacity=".3"/>
    </svg>
  )
);

ResidualWasteIcon.displayName = "ResidualWasteIcon";

export default ResidualWasteIcon;
