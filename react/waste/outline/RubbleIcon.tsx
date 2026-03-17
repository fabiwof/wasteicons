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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m2 20 4-5 3 2 4-7 3 4 3-3 3 9z"/><rect width="4" height="4" x="5" y="9" stroke="currentColor" opacity=".4" rx=".5"/><path stroke="currentColor" strokeLinejoin="round" d="m13 6 2 3.5h-4z" opacity=".4"/><rect width="3" height="3" x="16" y="7" stroke="currentColor" opacity=".4" rx=".5"/>
    </svg>
  )
);

RubbleIcon.displayName = "RubbleIcon";

export default RubbleIcon;
