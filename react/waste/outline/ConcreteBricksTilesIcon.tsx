import { forwardRef } from "react";

const ConcreteBricksTilesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="5" x="3" y="4" stroke="currentColor" strokeWidth="1.5" rx=".5"/><rect width="18" height="5" x="3" y="10" stroke="currentColor" strokeWidth="1.5" rx=".5"/><rect width="18" height="5" x="3" y="16" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" d="M12 4v5m-4 1v5m8-5v5m-4 1v5" opacity=".4"/>
    </svg>
  )
);

ConcreteBricksTilesIcon.displayName = "ConcreteBricksTilesIcon";

export default ConcreteBricksTilesIcon;
