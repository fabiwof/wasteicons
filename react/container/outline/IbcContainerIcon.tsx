import { forwardRef } from "react";

const IbcContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="28" height="18" x="6" y="3" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth=".5" d="M14 3v18m6-18v18m6-18v18m6-18v18" opacity=".3"/><path stroke="currentColor" strokeWidth=".5" d="M6 9h28M6 15h28" opacity=".3"/><rect width="32" height="4" x="4" y="21" stroke="currentColor" strokeWidth="1.2" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 25v1m10-1v1m10-1v1" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M18 3V2h4v1"/><circle cx="20" cy="21" r="1.5" stroke="currentColor"/>
    </svg>
  )
);

IbcContainerIcon.displayName = "IbcContainerIcon";

export default IbcContainerIcon;
