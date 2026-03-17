import { forwardRef } from "react";

const PetroleumIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 2c-4 5.5-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7.5-7-13z"/><path stroke="currentColor" strokeLinecap="round" d="M5.3 14h13.4" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 17.5Q8.25 19 12 19c3.75 0 4.5-.5 6-1.5" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M10 11c0-1.5 1-2.5 2-4" opacity=".4"/>
    </svg>
  )
);

PetroleumIcon.displayName = "PetroleumIcon";

export default PetroleumIcon;
