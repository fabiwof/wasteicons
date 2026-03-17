import { forwardRef } from "react";

const PackagingMaterialsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 8 8-4 8 4v10l-8 4-8-4z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 12v10M4 8l8 4 8-4"/>
    </svg>
  )
);

PackagingMaterialsIcon.displayName = "PackagingMaterialsIcon";

export default PackagingMaterialsIcon;
