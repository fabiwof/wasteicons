import { forwardRef } from "react";

const DairyProcessingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 3h8v4l2 2v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9l2-2z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 3h8"/><path stroke="currentColor" strokeWidth=".75" d="M7 14h10" opacity=".3"/>
    </svg>
  )
);

DairyProcessingIcon.displayName = "DairyProcessingIcon";

export default DairyProcessingIcon;
