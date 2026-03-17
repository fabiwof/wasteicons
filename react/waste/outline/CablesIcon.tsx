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
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="14" cy="10" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="12" cy="14" r="1.5" stroke="currentColor" opacity=".5"/>
    </svg>
  )
);

CablesIcon.displayName = "CablesIcon";

export default CablesIcon;
