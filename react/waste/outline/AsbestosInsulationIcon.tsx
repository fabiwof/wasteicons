import { forwardRef } from "react";

const AsbestosInsulationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="13" height="13" x="3" y="7" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M3 11h13M3 15h13" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M7 7v13m4-13v13" opacity=".3"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

AsbestosInsulationIcon.displayName = "AsbestosInsulationIcon";

export default AsbestosInsulationIcon;
