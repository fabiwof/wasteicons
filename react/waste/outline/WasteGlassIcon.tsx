import { forwardRef } from "react";

const WasteGlassIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 3h6v3l2 3v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 3h6"/><path stroke="currentColor" strokeWidth=".75" d="M8 13h8" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="m10 7 4-1" opacity=".3"/>
    </svg>
  )
);

WasteGlassIcon.displayName = "WasteGlassIcon";

export default WasteGlassIcon;
