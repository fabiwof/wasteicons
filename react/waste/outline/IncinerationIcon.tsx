import { forwardRef } from "react";

const IncinerationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="11" x="4" y="10" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth=".75" d="M4 14h16" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m8 10 1-4h6l1 4"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 21c-2 0-3-2-3-4 0-1.5 1.5-3 3-5 1.5 2 3 3.5 3 5 0 2-1 4-3 4z"/><path stroke="currentColor" strokeLinecap="round" d="M10 3c0 1.5.8 2.5 0 4m4-4c0 1.5-.8 2.5 0 4" opacity=".4"/>
    </svg>
  )
);

IncinerationIcon.displayName = "IncinerationIcon";

export default IncinerationIcon;
