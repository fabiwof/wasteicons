import { forwardRef } from "react";

const WasteOilsOtherIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="12" cy="5" stroke="currentColor" strokeWidth="1.5" rx="7" ry="2"/><path stroke="currentColor" strokeWidth="1.5" d="M5 5v14c0 1.1 3.1 2 7 2s7-.9 7-2V5"/><path stroke="currentColor" strokeWidth=".75" d="M5 12c0 1.1 3.1 2 7 2s7-.9 7-2" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M10 9h4" opacity=".4"/>
    </svg>
  )
);

WasteOilsOtherIcon.displayName = "WasteOilsOtherIcon";

export default WasteOilsOtherIcon;
