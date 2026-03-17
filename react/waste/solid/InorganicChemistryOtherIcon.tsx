import { forwardRef } from "react";

const InorganicChemistryOtherIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M9 3h6v6l4 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L9 9z"/><path fill="currentColor" d="M9 2h6v2H9z"/><path stroke="#fff" strokeWidth=".75" d="M7 15h10" opacity=".2"/><circle cx="12" cy="17" r="1" fill="#fff" opacity=".3"/>
    </svg>
  )
);

InorganicChemistryOtherIcon.displayName = "InorganicChemistryOtherIcon";

export default InorganicChemistryOtherIcon;
