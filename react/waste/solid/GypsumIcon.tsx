import { forwardRef } from "react";

const GypsumIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M3 5h15l3 3v13H3z" opacity=".2"/><path fill="currentColor" d="M18 5v3h3" opacity=".3"/><rect width="12" height="1" x="6" y="8.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="12" height="1" x="6" y="12.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="8" height="1" x="6" y="16.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

GypsumIcon.displayName = "GypsumIcon";

export default GypsumIcon;
