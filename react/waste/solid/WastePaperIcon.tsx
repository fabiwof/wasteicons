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
      <path fill="currentColor" d="M5 2h10l4 4v15H5z" opacity=".2"/><path fill="currentColor" d="M15 2v4h4" opacity=".3"/><rect width="8" height="1" x="8" y="7.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="8" height="1" x="8" y="10.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="6" height="1" x="8" y="13.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="4" height="1" x="8" y="16.5" fill="currentColor" opacity=".15" rx=".5"/><path fill="currentColor" d="M3 5v17h12" opacity=".1"/>
    </svg>
  )
);

WastePaperIcon.displayName = "WastePaperIcon";

export default WastePaperIcon;
