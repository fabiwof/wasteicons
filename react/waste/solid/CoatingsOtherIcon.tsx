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
      <rect width="14" height="16" x="5" y="5" fill="currentColor" rx="1"/><path fill="currentColor" d="M8 3h8v2H8z"/><path stroke="#fff" d="M5 9h14" opacity=".3"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 13h6" opacity=".2"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 16h4" opacity=".2"/>
    </svg>
  )
);

CoatingsOtherIcon.displayName = "CoatingsOtherIcon";

export default CoatingsOtherIcon;
