import { forwardRef } from "react";

const WastePaperIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 2h10l4 4v15H5z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 2v4h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 8h8m-8 3h8m-8 3h6m-6 3h4" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" d="M3 5v17h12" opacity=".4"/>
    </svg>
  )
);

WastePaperIcon.displayName = "WastePaperIcon";

export default WastePaperIcon;
