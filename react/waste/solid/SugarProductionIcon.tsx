import { forwardRef } from "react";

const SugarProductionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m4 10 8-4 8 4v8l-8 4-8-4z"/><path fill="#fff" d="m4 10 8 4 8-4" opacity=".15"/><path d="M12 14v8"/><path fill="#fff" d="M11.5 14h1v8h-1z" opacity=".1"/><path fill="currentColor" d="m4 10 8 4v8l-8-4z" opacity=".2"/>
    </svg>
  )
);

SugarProductionIcon.displayName = "SugarProductionIcon";

export default SugarProductionIcon;
