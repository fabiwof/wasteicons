import { forwardRef } from "react";

const GreenWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 20C4 10 10 3 20 3c0 10-6 17-16 17z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 20C9 15 14 9 20 3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 16c2-2 4-4 6-5" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 18c1-2 3-4 5-5" opacity=".3"/>
    </svg>
  )
);

GreenWasteIcon.displayName = "GreenWasteIcon";

export default GreenWasteIcon;
