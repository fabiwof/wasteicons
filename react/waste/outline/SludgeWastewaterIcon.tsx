import { forwardRef } from "react";

const SludgeWastewaterIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="14" x="3" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M3 14h18"/><path stroke="currentColor" d="M3 10c3-1 5-1 9 0s6 1 9 0" opacity=".4"/>
    </svg>
  )
);

SludgeWastewaterIcon.displayName = "SludgeWastewaterIcon";

export default SludgeWastewaterIcon;
