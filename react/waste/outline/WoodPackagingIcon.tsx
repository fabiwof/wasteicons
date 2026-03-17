import { forwardRef } from "react";

const WoodPackagingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="12" x="4" y="4" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth="1.5" d="M4 8h16M4 12h16"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 16v4m5-4v4m5-4v4"/>
    </svg>
  )
);

WoodPackagingIcon.displayName = "WoodPackagingIcon";

export default WoodPackagingIcon;
