import { forwardRef } from "react";

const RubbleIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m2 20 4-5 3 2 4-7 3 4 3-3 3 9z" opacity=".25"/><rect width="4" height="4" x="5" y="9" fill="currentColor" opacity=".3" rx=".5"/><path fill="currentColor" d="m13 6 2 3.5h-4z" opacity=".3"/><rect width="3" height="3" x="16" y="7" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

RubbleIcon.displayName = "RubbleIcon";

export default RubbleIcon;
