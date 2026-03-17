import { forwardRef } from "react";

const RollOffContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="31" height="16" x="3" y="8" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12 1 8"/><circle cx="32" cy="26" r="1.5" stroke="currentColor" strokeWidth="1.2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M12 8v16m8-16v16m8-16v16" opacity=".25"/>
    </svg>
  )
);

RollOffContainerIcon.displayName = "RollOffContainerIcon";

export default RollOffContainerIcon;
