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
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.5" stroke="currentColor" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3v2.5m0 13V21m-9-9h2.5m13 0H21"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m5.6 5.6 1.8 1.8m9.2 9.2 1.8 1.8m0-12.8-1.8 1.8m-9.2 9.2-1.8 1.8"/>
    </svg>
  )
);

MetalShapingIcon.displayName = "MetalShapingIcon";

export default MetalShapingIcon;
