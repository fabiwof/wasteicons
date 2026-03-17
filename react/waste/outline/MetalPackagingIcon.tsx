import { forwardRef } from "react";

const MetalPackagingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="12" cy="5" stroke="currentColor" strokeWidth="1.5" rx="6" ry="2"/><path stroke="currentColor" strokeWidth="1.5" d="M6 5v14c0 1.1 2.7 2 6 2s6-.9 6-2V5"/><path stroke="currentColor" strokeWidth=".75" d="M6 11c0 1.1 2.7 2 6 2s6-.9 6-2" opacity=".3"/>
    </svg>
  )
);

MetalPackagingIcon.displayName = "MetalPackagingIcon";

export default MetalPackagingIcon;
