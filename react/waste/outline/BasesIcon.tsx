import { forwardRef } from "react";

const BasesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 3h6v6l4 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L9 9z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 3h6"/><circle cx="10" cy="15" r="1.5" stroke="currentColor" strokeWidth=".75" opacity=".4"/><circle cx="14" cy="16" r="1" stroke="currentColor" strokeWidth=".75" opacity=".3"/>
    </svg>
  )
);

BasesIcon.displayName = "BasesIcon";

export default BasesIcon;
