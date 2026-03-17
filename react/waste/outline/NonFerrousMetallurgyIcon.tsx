import { forwardRef } from "react";

const NonFerrousMetallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="5" x="3" y="5" stroke="currentColor" strokeWidth="1.5" rx=".5"/><rect width="18" height="5" x="3" y="14" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M8 5v5m6-5v5m-6 4v5m6-5v5" opacity=".3"/>
    </svg>
  )
);

NonFerrousMetallurgyIcon.displayName = "NonFerrousMetallurgyIcon";

export default NonFerrousMetallurgyIcon;
