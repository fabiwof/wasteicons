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
      <path fill="currentColor" d="M7 4h10l3 4v10H4V8z"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 12h6" opacity=".2"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 15h4" opacity=".2"/>
    </svg>
  )
);

MetalContainingWasteIcon.displayName = "MetalContainingWasteIcon";

export default MetalContainingWasteIcon;
