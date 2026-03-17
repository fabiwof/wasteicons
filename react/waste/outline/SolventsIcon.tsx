import { forwardRef } from "react";

const SolventsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 3h4v5l5 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1l5-10z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 3h4"/><path stroke="currentColor" strokeWidth=".75" d="M7 15h10" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 2c.5 1 0 2-.5 2.5" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M16 2c.5 1 0 2-.5 2.5" opacity=".3"/>
    </svg>
  )
);

SolventsIcon.displayName = "SolventsIcon";

export default SolventsIcon;
