import { forwardRef } from "react";

const CablesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M3 12c3-4 5-4 8 0s5 4 8 0v2c-3 4-5 4-8 0s-5-4-8 0z" opacity=".3"/><path fill="currentColor" d="M3 7c3-3 5-3 8 0s5 3 8 0v1.5c-3 3-5 3-8 0s-5-3-8 0z" opacity=".2"/><path fill="currentColor" d="M3 17c3-3 5-3 8 0s5 3 8 0v1.5c-3 3-5 3-8 0s-5-3-8 0z" opacity=".2"/>
    </svg>
  )
);

CablesIcon.displayName = "CablesIcon";

export default CablesIcon;
