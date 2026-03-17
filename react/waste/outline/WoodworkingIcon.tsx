import { forwardRef } from "react";

const WoodworkingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="1.5" stroke="currentColor" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 4v2m0 8v2m-6-6h2m8 0h2" opacity=".3"/><rect width="18" height="3" x="3" y="18" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M8 18v3m6-3v3" opacity=".3"/>
    </svg>
  )
);

WoodworkingIcon.displayName = "WoodworkingIcon";

export default WoodworkingIcon;
