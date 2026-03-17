import { forwardRef } from "react";

const MineralExtractionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 4h12l-2 17H8z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 4h12"/><path stroke="currentColor" strokeLinecap="round" d="M9 9h6m-5 5h4" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M12 4v17" opacity=".2"/>
    </svg>
  )
);

MineralExtractionIcon.displayName = "MineralExtractionIcon";

export default MineralExtractionIcon;
