import { forwardRef } from "react";

const MetalShapingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="4" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="#fff" opacity=".3"/><rect width="2" height="2.5" x="11" y="3" fill="currentColor" rx=".5"/><rect width="2" height="2.5" x="11" y="18.5" fill="currentColor" rx=".5"/><rect width="2.5" height="2" x="3" y="11" fill="currentColor" rx=".5"/><rect width="2.5" height="2" x="18.5" y="11" fill="currentColor" rx=".5"/><rect width="2.4" height="2" x="5.6" y="5" fill="currentColor" rx=".5" transform="rotate(-45 6.8 6)"/><rect width="2.4" height="2" x="16" y="16" fill="currentColor" rx=".5" transform="rotate(-45 17.2 17)"/><rect width="2.4" height="2" x="16" y="5" fill="currentColor" rx=".5" transform="rotate(45 17.2 6)"/><rect width="2.4" height="2" x="5.6" y="16" fill="currentColor" rx=".5" transform="rotate(45 6.8 17)"/>
    </svg>
  )
);

MetalShapingIcon.displayName = "MetalShapingIcon";

export default MetalShapingIcon;
