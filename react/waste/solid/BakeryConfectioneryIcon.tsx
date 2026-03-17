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
      <circle cx="8" cy="14" r="4" fill="currentColor"/><circle cx="16" cy="14" r="4" fill="currentColor"/><circle cx="8" cy="14" r="2" fill="#fff" opacity=".15"/><circle cx="16" cy="14" r="2" fill="#fff" opacity=".15"/><path fill="currentColor" d="m10 10 2-6 2 6" opacity=".7"/>
    </svg>
  )
);

BakeryConfectioneryIcon.displayName = "BakeryConfectioneryIcon";

export default BakeryConfectioneryIcon;
