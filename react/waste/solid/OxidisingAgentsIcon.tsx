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
      <circle cx="12" cy="14" r="7" fill="currentColor" opacity=".2"/><path fill="currentColor" d="M12 14c-1.5 0-2.5-1.5-2.5-3s1.2-2.5 2.5-4.5c1.3 2 2.5 3 2.5 4.5s-1 3-2.5 3" opacity=".5"/><rect width="1" height="3" x="8.5" y="4" fill="currentColor" opacity=".3" rx=".5"/><rect width="1" height="3" x="14.5" y="4" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

OxidisingAgentsIcon.displayName = "OxidisingAgentsIcon";

export default OxidisingAgentsIcon;
