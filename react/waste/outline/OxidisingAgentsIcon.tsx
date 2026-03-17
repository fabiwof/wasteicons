import { forwardRef } from "react";

const OxidisingAgentsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 14c-1.5 0-2.5-1.5-2.5-3s1.2-2.5 2.5-4.5c1.3 2 2.5 3 2.5 4.5s-1 3-2.5 3z"/><path stroke="currentColor" strokeLinecap="round" d="M9 4c0 1 .5 2 0 3m6-3c0 1-.5 2 0 3" opacity=".4"/>
    </svg>
  )
);

OxidisingAgentsIcon.displayName = "OxidisingAgentsIcon";

export default OxidisingAgentsIcon;
