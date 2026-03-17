import { forwardRef } from "react";

const OtherMunicipalWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 5c1-1 3-2 5-2s4 1 5 2l2 15H5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 5q1.5 1.5 3 1.5c1.5 0 2-.5 3-1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3v2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 10q3 1.5 6 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7.5 14c3 1 5 1 8 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 18c3 1 6 1 9 0" opacity=".3"/>
    </svg>
  )
);

OtherMunicipalWasteIcon.displayName = "OtherMunicipalWasteIcon";

export default OtherMunicipalWasteIcon;
