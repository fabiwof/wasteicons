import { forwardRef } from "react";

const InsulatingOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="16" x="5" y="4" fill="currentColor" rx="1"/><rect width="14" height="2" x="5" y="3" fill="currentColor" rx=".5"/><circle cx="9" cy="12" r="2.5" fill="#fff" opacity=".2"/><circle cx="15" cy="12" r="2.5" fill="#fff" opacity=".2"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><rect width="1" height="2" x="8.5" y="7.5" fill="#fff" opacity=".2" rx=".5"/><rect width="1" height="2" x="8.5" y="14.5" fill="#fff" opacity=".2" rx=".5"/><rect width="1" height="2" x="14.5" y="7.5" fill="#fff" opacity=".2" rx=".5"/><rect width="1" height="2" x="14.5" y="14.5" fill="#fff" opacity=".2" rx=".5"/>
    </svg>
  )
);

InsulatingOilsIcon.displayName = "InsulatingOilsIcon";

export default InsulatingOilsIcon;
