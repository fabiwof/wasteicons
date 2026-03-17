import { forwardRef } from "react";

const SkipContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M13 23 5 10l5-6h20l5 6-8 13z"/><path stroke="currentColor" strokeLinecap="round" d="M7 12h26"/><circle cx="15" cy="9" r="1.2" stroke="currentColor"/><circle cx="25" cy="9" r="1.2" stroke="currentColor"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m13 23-2 3 2-1"/>
    </svg>
  )
);

SkipContainerIcon.displayName = "SkipContainerIcon";

export default SkipContainerIcon;
