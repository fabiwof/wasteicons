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
      <rect width="16" height="16" x="4" y="4" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 11c2-1.5 5-1.5 8 0s6 1.5 8 0"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M4 15c2-1 5-1 8 0s6 1 8 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M12 4v4" opacity=".4"/>
    </svg>
  )
);

AqueousLiquidWasteIcon.displayName = "AqueousLiquidWasteIcon";

export default AqueousLiquidWasteIcon;
