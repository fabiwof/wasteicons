import { forwardRef } from "react";

const IncinerationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="11" x="4" y="10" fill="currentColor" opacity=".2" rx="1"/><path fill="currentColor" d="M4 13.5h16v1H4z" opacity=".1"/><path fill="currentColor" d="m8 10 1-4h6l1 4z" opacity=".3"/><path fill="currentColor" d="M12 21c-2 0-3-2-3-4 0-1.5 1.5-3 3-5 1.5 2 3 3.5 3 5 0 2-1 4-3 4" opacity=".5"/><rect width="1" height="4" x="9.5" y="3" fill="currentColor" opacity=".3" rx=".5"/><rect width="1" height="4" x="13.5" y="3" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

IncinerationIcon.displayName = "IncinerationIcon";

export default IncinerationIcon;
