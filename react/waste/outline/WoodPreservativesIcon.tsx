import { forwardRef } from "react";

const WoodPreservativesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="7" height="16" x="3" y="4" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M5 7h3m-3 4h3m-3 4h3" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M16 4c3 0 5 2 5 5 0 5-5 8-5 8s-5-3-5-8c0-3 2-5 5-5z"/><path stroke="currentColor" strokeLinecap="round" d="M16 9v3m-1.5-1.5h3" opacity=".4"/>
    </svg>
  )
);

WoodPreservativesIcon.displayName = "WoodPreservativesIcon";

export default WoodPreservativesIcon;
