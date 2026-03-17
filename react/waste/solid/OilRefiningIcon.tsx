import { forwardRef } from "react";

const OilRefiningIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="6" height="18" x="9" y="3" fill="currentColor" rx="1"/><path fill="#fff" d="M9 6.5h6v1H9z" opacity=".2"/><path fill="#fff" d="M9 10.5h6v1H9z" opacity=".2"/><path fill="#fff" d="M9 14.5h6v1H9z" opacity=".2"/><rect width="3" height="4" x="15" y="8" fill="currentColor" opacity=".5" rx=".5"/><rect width="3" height="4" x="6" y="13" fill="currentColor" opacity=".5" rx=".5"/><rect width="1" height="1.5" x="11.5" y="2" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

OilRefiningIcon.displayName = "OilRefiningIcon";

export default OilRefiningIcon;
