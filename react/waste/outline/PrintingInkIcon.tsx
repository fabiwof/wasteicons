import { forwardRef } from "react";

const PrintingInkIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="8" x="4" y="10" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 10V5h10v5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 18v3h10v-3"/><circle cx="17" cy="14" r="1" stroke="currentColor" opacity=".5"/>
    </svg>
  )
);

PrintingInkIcon.displayName = "PrintingInkIcon";

export default PrintingInkIcon;
