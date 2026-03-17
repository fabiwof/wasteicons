import { forwardRef } from "react";

const HazardousWasteContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="24" height="20" x="8" y="5" stroke="currentColor" strokeWidth="1.5" rx="1"/><rect width="6" height="5" x="6" y="2" stroke="currentColor" strokeWidth="1.5" rx="1"/><rect width="6" height="5" x="28" y="2" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" d="M10 8h20" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" d="M10 22h20" opacity=".4"/>
    </svg>
  )
);

HazardousWasteContainerIcon.displayName = "HazardousWasteContainerIcon";

export default HazardousWasteContainerIcon;
