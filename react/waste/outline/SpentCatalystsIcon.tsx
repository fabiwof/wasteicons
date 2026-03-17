import { forwardRef } from "react";

const SpentCatalystsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h3l2-4h8l2 4h3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h3l2 4h8l2-4h3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 8v8m2-8v8m2-8v8" opacity=".3"/>
    </svg>
  )
);

SpentCatalystsIcon.displayName = "SpentCatalystsIcon";

export default SpentCatalystsIcon;
