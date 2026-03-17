import { forwardRef } from "react";

const FrontLoaderBinIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" d="M7 5h26"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m8 5 3 16h18l3-16"/><circle cx="10" cy="23" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="17" cy="23" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="23" cy="23" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="30" cy="23" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
);

FrontLoaderBinIcon.displayName = "FrontLoaderBinIcon";

export default FrontLoaderBinIcon;
