import { forwardRef } from "react";

const FoundryWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16v12H4z"/><path stroke="currentColor" strokeWidth=".75" d="M8 8v12m8-12v12" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m10 4 2 4 2-4"/>
    </svg>
  )
);

FoundryWasteIcon.displayName = "FoundryWasteIcon";

export default FoundryWasteIcon;
