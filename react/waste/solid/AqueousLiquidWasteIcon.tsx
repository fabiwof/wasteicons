import { forwardRef } from "react";

const AqueousLiquidWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="16" x="4" y="4" fill="currentColor" opacity=".15" rx="1.5"/><path fill="currentColor" d="M4 11c2-1.5 5-1.5 8 0s6 1.5 8 0v9H4z" opacity=".25"/><path fill="currentColor" d="M4 15c2-1 5-1 8 0s6 1 8 0v5H4z" opacity=".1"/><rect width="1" height="4" x="11.5" y="4" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

AqueousLiquidWasteIcon.displayName = "AqueousLiquidWasteIcon";

export default AqueousLiquidWasteIcon;
