import { forwardRef } from "react";

const ResidualWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M7 6c1-1 3-2 5-2s4 1 5 2l2 14H5z" opacity=".25"/><path fill="currentColor" d="M9 6q1.5 1.5 3 1.5c1.5 0 2-.5 3-1.5" opacity=".2"/><rect width="1" height="3" x="11.5" y="3" fill="currentColor" rx=".5"/><rect width="1" height="1.5" x="9.5" y="3.5" fill="currentColor" opacity=".3" rx=".5" transform="rotate(-20 10 4.25)"/><rect width="1" height="1.5" x="13.5" y="3.5" fill="currentColor" opacity=".3" rx=".5" transform="rotate(20 14 4.25)"/><path fill="currentColor" d="M8 10c2 .5 4 .5 7 0" opacity=".1"/><path fill="currentColor" d="M7 14c3 .5 5 .5 9 0" opacity=".1"/>
    </svg>
  )
);

ResidualWasteIcon.displayName = "ResidualWasteIcon";

export default ResidualWasteIcon;
