import { forwardRef } from "react";

const WasteOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 2c-3.5 5.5-7 9-7 13a7 7 0 0 0 14 0c0-4-3.5-7.5-7-13z"/><path stroke="currentColor" strokeLinecap="round" d="M9 16.5c0-2 1.5-3 3-4.5" opacity=".4"/><circle cx="9" cy="17" r=".5" fill="currentColor" opacity=".3"/>
    </svg>
  )
);

WasteOilsIcon.displayName = "WasteOilsIcon";

export default WasteOilsIcon;
