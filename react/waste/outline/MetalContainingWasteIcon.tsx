import { forwardRef } from "react";

const MetalContainingWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16v10H4z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 8 3-4h10l3 4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 12h6m-6 3h4" opacity=".3"/>
    </svg>
  )
);

MetalContainingWasteIcon.displayName = "MetalContainingWasteIcon";

export default MetalContainingWasteIcon;
