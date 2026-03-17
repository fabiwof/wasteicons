import { forwardRef } from "react";

const BigBagIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M11 7h18q3 8.5 0 17H11q-3-8.5 0-17z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 7c-1-3 1-5 4-5m10 5c1-3-1-5-4-5"/><path stroke="currentColor" strokeWidth=".5" d="M20 7v17" opacity=".2"/>
    </svg>
  )
);

BigBagIcon.displayName = "BigBagIcon";

export default BigBagIcon;
