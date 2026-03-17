import { forwardRef } from "react";

const SkipCompactorIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="14" x="2" y="10" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10V7h8v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 15 4 2-4 2"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m16 10-2-6h22l-2 6v8l-1 6H17l-1-6z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m16 24-2 3 2-1"/>
    </svg>
  )
);

SkipCompactorIcon.displayName = "SkipCompactorIcon";

export default SkipCompactorIcon;
