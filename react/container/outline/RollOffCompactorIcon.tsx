import { forwardRef } from "react";

const RollOffCompactorIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="12" x="2" y="12" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12V9h8v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 16 3 2-3 2"/><rect width="19" height="20" x="18" y="4" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M25 4v20m6-20v20" opacity=".25"/><path stroke="currentColor" strokeWidth=".75" d="M4 18h12" opacity=".25"/><circle cx="35" cy="26" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
);

RollOffCompactorIcon.displayName = "RollOffCompactorIcon";

export default RollOffCompactorIcon;
