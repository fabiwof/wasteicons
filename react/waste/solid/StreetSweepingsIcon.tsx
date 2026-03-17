import { forwardRef } from "react";

const StreetSweepingsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="1.5" height="10" x="11.25" y="2" fill="currentColor" rx=".75"/><path fill="currentColor" d="M8 12h8l1 3H7z" opacity=".3"/><path fill="currentColor" d="m7 15-1 6h12l-1-6z" opacity=".2"/><path fill="currentColor" d="M9 15h1v5H9z" opacity=".1"/><path fill="currentColor" d="M11 15h1v5h-1z" opacity=".1"/><path fill="currentColor" d="M13 15h1v5h-1z" opacity=".1"/><path fill="currentColor" d="M15 15h1v5h-1z" opacity=".1"/>
    </svg>
  )
);

StreetSweepingsIcon.displayName = "StreetSweepingsIcon";

export default StreetSweepingsIcon;
