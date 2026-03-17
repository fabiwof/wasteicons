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
      <ellipse cx="12" cy="5" fill="currentColor" rx="6" ry="2"/><path fill="currentColor" d="M6 5v14c0 1.1 2.7 2 6 2s6-.9 6-2V5q-2.25 1.2-6 1.2c-3.75 0-4.5-.4-6-1.2"/><ellipse cx="12" cy="11" fill="#fff" opacity=".1" rx="6" ry="2"/>
    </svg>
  )
);

MetalPackagingIcon.displayName = "MetalPackagingIcon";

export default MetalPackagingIcon;
