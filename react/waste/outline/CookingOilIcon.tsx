import { forwardRef } from "react";

const CookingOilIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h8v2l1 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l1-2z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 3h4v4h-4z"/><path stroke="currentColor" strokeWidth=".75" d="M8 14h8" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M8 17h8" opacity=".3"/>
    </svg>
  )
);

CookingOilIcon.displayName = "CookingOilIcon";

export default CookingOilIcon;
