import { forwardRef } from "react";

const IronSteelScrapIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 3h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 21h12"/><path stroke="currentColor" strokeWidth="1.5" d="M9 3h6v18H9z"/><path stroke="currentColor" strokeWidth=".75" d="M9 8h6m-6 8h6" opacity=".3"/>
    </svg>
  )
);

IronSteelScrapIcon.displayName = "IronSteelScrapIcon";

export default IronSteelScrapIcon;
