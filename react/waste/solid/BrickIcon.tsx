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
      <rect width="18" height="16" x="3" y="4" fill="currentColor" opacity=".2" rx=".5"/><path fill="currentColor" d="M3 7.5h18v1H3z" opacity=".3"/><path fill="currentColor" d="M3 11.5h18v1H3z" opacity=".3"/><path fill="currentColor" d="M3 15.5h18v1H3z" opacity=".3"/><path fill="#fff" d="M9.5 4h1v4h-1z" opacity=".3"/><path fill="#fff" d="M15.5 4h1v4h-1z" opacity=".3"/><path fill="#fff" d="M6.5 8h1v4h-1z" opacity=".3"/><path fill="#fff" d="M12.5 8h1v4h-1z" opacity=".3"/><path fill="#fff" d="M9.5 12h1v4h-1z" opacity=".3"/><path fill="#fff" d="M15.5 12h1v4h-1z" opacity=".3"/><path fill="#fff" d="M6.5 16h1v4h-1z" opacity=".3"/><path fill="#fff" d="M12.5 16h1v4h-1z" opacity=".3"/>
    </svg>
  )
);

BrickIcon.displayName = "BrickIcon";

export default BrickIcon;
