import { forwardRef } from "react";

const DredgingSpoilIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M5 14h14l2 6H3z" opacity=".25"/><path fill="currentColor" d="M5 14c3-1 5-1 7 0s4 0 7-1" opacity=".1"/><path fill="currentColor" d="M9 14V7l3-3 3 3v7z" opacity=".3"/><path fill="currentColor" d="M9 9.5h6v1H9z" opacity=".15"/>
    </svg>
  )
);

DredgingSpoilIcon.displayName = "DredgingSpoilIcon";

export default DredgingSpoilIcon;
