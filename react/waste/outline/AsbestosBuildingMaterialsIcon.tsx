import { forwardRef } from "react";

const AsbestosBuildingMaterialsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 7c1.5 0 2 3 3.5 3s2.5-3 4-3 2 3 3.5 3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 13c1.5 0 2 3 3.5 3s2.5-3 4-3 2 3 3.5 3"/><path stroke="currentColor" strokeLinecap="round" d="M3 7v6m11-3v6" opacity=".4"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

AsbestosBuildingMaterialsIcon.displayName = "AsbestosBuildingMaterialsIcon";

export default AsbestosBuildingMaterialsIcon;
