import { forwardRef } from "react";

const LiquidFuelsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="12" height="15" x="4" y="6" fill="currentColor" rx="1"/><path fill="currentColor" d="M7 6V4h6v2z" opacity=".3"/><rect width="6" height="1" x="7" y="3.5" fill="currentColor" rx=".5"/><path fill="currentColor" d="m16 10 3-2v6l-3-2z"/><path fill="#fff" d="M4 11.5h12v1H4z" opacity=".2"/>
    </svg>
  )
);

LiquidFuelsIcon.displayName = "LiquidFuelsIcon";

export default LiquidFuelsIcon;
