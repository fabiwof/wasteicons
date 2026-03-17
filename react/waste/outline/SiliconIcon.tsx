import { forwardRef } from "react";

const SiliconIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" d="m16.5 4.5-12 12"/><path stroke="currentColor" strokeWidth=".75" d="M8 8h8v8" opacity=".3"/>
    </svg>
  )
);

SiliconIcon.displayName = "SiliconIcon";

export default SiliconIcon;
