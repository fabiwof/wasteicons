import { forwardRef } from "react";

const PackagingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m3 9 9-5 9 5-9 4z" opacity=".3"/><path fill="currentColor" d="M3 9v10l9 4V13z" opacity=".7"/><path fill="currentColor" d="M21 9v10l-9 4V13z"/><path fill="currentColor" d="M7 6.5v4" opacity=".2"/><rect width="1" height="4" x="6.5" y="6.5" fill="currentColor" opacity=".2" rx=".5"/><rect width="1" height="4" x="16.5" y="6.5" fill="currentColor" opacity=".2" rx=".5"/>
    </svg>
  )
);

PackagingIcon.displayName = "PackagingIcon";

export default PackagingIcon;
