import { forwardRef } from "react";

const WasteOilRegenerationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 3c-3 5-6 8-6 12a6 6 0 1 0 12 0c0-4-3-7-6-12z"/><path stroke="currentColor" strokeLinecap="round" d="M9 13h6" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 16h6" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M10 10c0-1 1-2 2-3" opacity=".4"/>
    </svg>
  )
);

WasteOilRegenerationIcon.displayName = "WasteOilRegenerationIcon";

export default WasteOilRegenerationIcon;
