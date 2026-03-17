import { forwardRef } from "react";

const MunicipalWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 6h10l-1 13H8z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 6h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 4h6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 6 5 8"/><circle cx="9" cy="21" r="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="21" r="1.5" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 9v7m4-7v7" opacity=".3"/>
    </svg>
  )
);

MunicipalWasteIcon.displayName = "MunicipalWasteIcon";

export default MunicipalWasteIcon;
