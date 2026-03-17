import { forwardRef } from "react";

const HydrometallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 4h14v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 4h14"/><path stroke="currentColor" strokeWidth="1.5" d="M5 12c3-1 5-1 7 0s4 1 7 0"/><path stroke="currentColor" strokeWidth=".75" d="M5 16c3-1 5-1 7 0s4 1 7 0" opacity=".3"/>
    </svg>
  )
);

HydrometallurgyIcon.displayName = "HydrometallurgyIcon";

export default HydrometallurgyIcon;
