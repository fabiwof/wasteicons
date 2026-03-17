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
      <path fill="currentColor" d="M3 7c1.5 0 2 3 3.5 3s2.5-3 4-3 2 3 3.5 3v6c-1.5 0-2-3-3.5-3s-3.5 3-5 3S3 13 3 13z" opacity=".2"/><path fill="currentColor" d="M3 13c1.5 0 2 3 3.5 3s2.5-3 4-3 2 3 3.5 3" opacity=".15"/><path fill="currentColor" d="M2.5 7h1v6h-1z" opacity=".2"/><path fill="currentColor" d="M13.5 10h1v6h-1z" opacity=".2"/><g><path fill="currentColor" d="m19 10 2.5 4.5h-5z" opacity=".6"/><circle cx="19" cy="14" r=".5" fill="#fff"/><rect width=".8" height="1.5" x="18.6" y="11.8" fill="#fff" rx=".4"/></g>
    </svg>
  )
);

AsbestosBuildingMaterialsIcon.displayName = "AsbestosBuildingMaterialsIcon";

export default AsbestosBuildingMaterialsIcon;
