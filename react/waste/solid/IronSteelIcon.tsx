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
      <path fill="currentColor" d="M7 21V8l5-5 5 5v13z"/><path fill="#fff" d="M10 16h4v5h-4z" opacity=".2"/><path stroke="#fff" strokeWidth=".75" d="M7 14h10" opacity=".2"/>
    </svg>
  )
);

IronSteelIcon.displayName = "IronSteelIcon";

export default IronSteelIcon;
