import { forwardRef } from "react";

const BulkyWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="7" x="4" y="10" fill="currentColor" opacity=".25" rx=".5"/><path fill="currentColor" d="M6 10V7h12v3" opacity=".2"/><rect width="2" height="6" x="2" y="11" fill="currentColor" opacity=".3" rx=".5"/><rect width="2" height="6" x="20" y="11" fill="currentColor" opacity=".3" rx=".5"/><rect width="1.5" height="3" x="5.5" y="17" fill="currentColor" rx=".75"/><rect width="1.5" height="3" x="17" y="17" fill="currentColor" rx=".75"/><path fill="currentColor" d="M10 10v3h4v-3" opacity=".15"/>
    </svg>
  )
);

BulkyWasteIcon.displayName = "BulkyWasteIcon";

export default BulkyWasteIcon;
