import { forwardRef } from "react";

const DredgingSpoilIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 14h14l2 6H3z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M5 14c3-1 5-1 7 0s4 0 7-1" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 14V7l3-3 3 3v7"/><path stroke="currentColor" strokeWidth=".75" d="M9 10h6" opacity=".3"/>
    </svg>
  )
);

DredgingSpoilIcon.displayName = "DredgingSpoilIcon";

export default DredgingSpoilIcon;
