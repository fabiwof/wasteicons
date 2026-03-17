import { forwardRef } from "react";

const BakeryConfectioneryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="8" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m10 10 2-6 2 6"/>
    </svg>
  )
);

BakeryConfectioneryIcon.displayName = "BakeryConfectioneryIcon";

export default BakeryConfectioneryIcon;
