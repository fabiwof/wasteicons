import { forwardRef } from "react";

const StabilisedWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 8 8-5 8 5v9l-8 5-8-5z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 8 8 5 8-5"/><path stroke="currentColor" strokeWidth="1.5" d="M12 13v9"/><path stroke="currentColor" strokeWidth=".75" d="m8 10.5 4 2.5 4-2.5" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="m8 15 4 2.5 4-2.5" opacity=".3"/>
    </svg>
  )
);

StabilisedWasteIcon.displayName = "StabilisedWasteIcon";

export default StabilisedWasteIcon;
