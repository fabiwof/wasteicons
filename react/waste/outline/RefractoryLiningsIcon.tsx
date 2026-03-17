import { forwardRef } from "react";

const RefractoryLiningsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="12" x="3" y="9" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth="1.5" d="M3 15h18"/><path stroke="currentColor" d="M9 9v12m6-12v6m-3 0v6" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" d="M8 4c0 2 .8 3 0 4.5M12 3c0 2 .8 3 0 4.5M16 4c0 2 .8 3 0 4.5" opacity=".4"/>
    </svg>
  )
);

RefractoryLiningsIcon.displayName = "RefractoryLiningsIcon";

export default RefractoryLiningsIcon;
