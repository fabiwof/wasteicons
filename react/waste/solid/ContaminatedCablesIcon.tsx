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
      <path fill="currentColor" d="M3 12c3-4 5-4 8 0s5 4 8 0" opacity=".3"/><path fill="currentColor" d="M3 7c3-3 5-3 8 0s5 3 8 0" opacity=".2"/><path fill="currentColor" d="M3 17c3-3 5-3 8 0s5 3 8 0" opacity=".2"/><g><path fill="currentColor" d="m19 10 2.5 4.5h-5z" opacity=".6"/><circle cx="19" cy="14" r=".5" fill="#fff"/><rect width=".8" height="1.5" x="18.6" y="11.8" fill="#fff" rx=".4"/></g>
    </svg>
  )
);

ContaminatedCablesIcon.displayName = "ContaminatedCablesIcon";

export default ContaminatedCablesIcon;
