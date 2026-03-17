import { forwardRef } from "react";

const UndergroundSystemIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 12h36"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M16 12V6a4 4 0 0 1 8 0v6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M18 5h4"/><rect width="18" height="13" x="11" y="12" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.2" opacity=".4" rx="1"/>
    </svg>
  )
);

UndergroundSystemIcon.displayName = "UndergroundSystemIcon";

export default UndergroundSystemIcon;
