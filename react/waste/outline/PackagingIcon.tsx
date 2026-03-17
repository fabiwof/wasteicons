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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 9 9-5 9 5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 9v10l9 4 9-4V9"/><path stroke="currentColor" strokeWidth="1.5" d="M12 13v10"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m3 9 9 4 9-4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 7v4m10-4v4" opacity=".3"/>
    </svg>
  )
);

PackagingIcon.displayName = "PackagingIcon";

export default PackagingIcon;
