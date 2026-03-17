import { forwardRef } from "react";

const ShredderIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="8" x="4" y="3" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M4 7h16"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m8 7 1 4m2-4 .5 4M14 7l-.5 4M17 7l-1 4"/><rect width="14" height="6" x="5" y="15" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M8 15v6m4-6v6m4-6v6" opacity=".3"/>
    </svg>
  )
);

ShredderIcon.displayName = "ShredderIcon";

export default ShredderIcon;
