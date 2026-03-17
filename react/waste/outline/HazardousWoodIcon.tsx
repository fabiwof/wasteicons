import { forwardRef } from "react";

const HazardousWoodIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="14" cy="14" stroke="currentColor" strokeWidth="1.5" rx="3" ry="6"/><ellipse cx="14" cy="14" stroke="currentColor" strokeWidth=".75" opacity=".3" rx="1.2" ry="2.5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M14 8H6c-2 0-3 2.5-3 6s1 6 3 6h8"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

HazardousWoodIcon.displayName = "HazardousWoodIcon";

export default HazardousWoodIcon;
