import { forwardRef } from "react";

const ContaminatedCablesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="10" cy="12" r="7" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="10" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="12" cy="10" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="10" cy="14" r="1.5" stroke="currentColor" opacity=".5"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

ContaminatedCablesIcon.displayName = "ContaminatedCablesIcon";

export default ContaminatedCablesIcon;
