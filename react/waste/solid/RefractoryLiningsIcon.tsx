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
      <rect width="18" height="12" x="3" y="9" fill="currentColor" opacity=".2" rx=".5"/><rect width="18" height="6" x="3" y="15" fill="currentColor" opacity=".15" rx="0"/><rect width="1" height="12" x="9" y="9" fill="currentColor" opacity=".15" rx="0"/><rect width="1" height="6" x="15" y="9" fill="currentColor" opacity=".15" rx="0"/><rect width="1" height="6" x="12" y="15" fill="currentColor" opacity=".15" rx="0"/><rect width="1" height="4.5" x="7.5" y="4" fill="currentColor" opacity=".3" rx=".5"/><rect width="1" height="4.5" x="11.5" y="3" fill="currentColor" opacity=".3" rx=".5"/><rect width="1" height="4.5" x="15.5" y="4" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

RefractoryLiningsIcon.displayName = "RefractoryLiningsIcon";

export default RefractoryLiningsIcon;
