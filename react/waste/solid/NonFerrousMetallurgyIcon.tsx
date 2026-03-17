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
      <rect width="18" height="5" x="3" y="5" fill="currentColor" rx=".5"/><rect width="18" height="5" x="3" y="14" fill="currentColor" rx=".5"/><path stroke="#fff" strokeWidth=".75" d="M8 5v5m6-5v5" opacity=".2"/><path stroke="#fff" strokeWidth=".75" d="M8 14v5m6-5v5" opacity=".2"/>
    </svg>
  )
);

NonFerrousMetallurgyIcon.displayName = "NonFerrousMetallurgyIcon";

export default NonFerrousMetallurgyIcon;
