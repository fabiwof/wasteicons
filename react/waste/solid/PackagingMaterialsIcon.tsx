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
      <path fill="currentColor" d="m4 8 8-4 8 4-8 4z" opacity=".3"/><path fill="currentColor" d="M4 8v10l8 4V12z" opacity=".7"/><path fill="currentColor" d="M20 8v10l-8 4V12z"/>
    </svg>
  )
);

PackagingMaterialsIcon.displayName = "PackagingMaterialsIcon";

export default PackagingMaterialsIcon;
