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
      <rect width="16" height="8" x="4" y="10" fill="currentColor" rx="1"/><path fill="currentColor" d="M7 5h10v5H7z" opacity=".8"/><path fill="currentColor" d="M7 18h10v3H7z" opacity=".7"/><circle cx="17" cy="14" r="1" fill="#fff" opacity=".3"/>
    </svg>
  )
);

PrintingInkIcon.displayName = "PrintingInkIcon";

export default PrintingInkIcon;
