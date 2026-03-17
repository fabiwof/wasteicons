import { forwardRef } from "react";

const DepotContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="28" height="22" x="6" y="3" stroke="currentColor" strokeWidth="1.5" rx="4"/><rect width="12" height="3" x="14" y="5" stroke="currentColor" opacity=".5" rx="1.5"/><circle cx="20" cy="6.5" r="1" stroke="currentColor" opacity=".5"/><path stroke="currentColor" strokeLinecap="round" d="M9 21h22" opacity=".3"/>
    </svg>
  )
);

DepotContainerIcon.displayName = "DepotContainerIcon";

export default DepotContainerIcon;
