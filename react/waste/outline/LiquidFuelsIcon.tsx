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
      <rect width="12" height="15" x="4" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 6V4h6v2"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m16 10 3-2v6l-3-2"/><path stroke="currentColor" strokeWidth=".75" d="M4 12h12" opacity=".3"/>
    </svg>
  )
);

LiquidFuelsIcon.displayName = "LiquidFuelsIcon";

export default LiquidFuelsIcon;
