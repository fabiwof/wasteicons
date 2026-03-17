import { forwardRef } from "react";

const BrickIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="16" x="3" y="4" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth="1.5" d="M3 8h18M3 12h18M3 16h18"/><path stroke="currentColor" d="M10 4v4m6-4v4M7 8v4m6-4v4m-3 0v4m6-4v4m-9 0v4m6-4v4" opacity=".4"/>
    </svg>
  )
);

BrickIcon.displayName = "BrickIcon";

export default BrickIcon;
