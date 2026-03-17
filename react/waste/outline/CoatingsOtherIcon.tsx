import { forwardRef } from "react";

const CoatingsOtherIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="16" x="5" y="5" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M5 9h14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 5V3h8v2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 13h6m-6 3h4" opacity=".3"/>
    </svg>
  )
);

CoatingsOtherIcon.displayName = "CoatingsOtherIcon";

export default CoatingsOtherIcon;
