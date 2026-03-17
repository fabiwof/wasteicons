import { forwardRef } from "react";

const OilRefiningIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="6" height="18" x="9" y="3" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth=".75" d="M9 7h6m-6 4h6m-6 4h6" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M15 8h3v4h-3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 13H6v4h3"/><path stroke="currentColor" strokeLinecap="round" d="M12 3V2" opacity=".4"/>
    </svg>
  )
);

OilRefiningIcon.displayName = "OilRefiningIcon";

export default OilRefiningIcon;
