import { forwardRef } from "react";

const IronSteelIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 21V8l5-5 5 5v13"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 21h10"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-5h4v5"/><path stroke="currentColor" strokeWidth=".75" d="M7 14h10" opacity=".3"/>
    </svg>
  )
);

IronSteelIcon.displayName = "IronSteelIcon";

export default IronSteelIcon;
