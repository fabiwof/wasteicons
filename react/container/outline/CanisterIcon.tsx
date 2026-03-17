import { forwardRef } from "react";

const CanisterIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="22" height="21" x="8" y="5" stroke="currentColor" strokeWidth="1.5" rx="4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5V2h-3v3"/><circle cx="25" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path stroke="currentColor" strokeLinecap="round" d="M14 3h8" opacity=".4"/>
    </svg>
  )
);

CanisterIcon.displayName = "CanisterIcon";

export default CanisterIcon;
