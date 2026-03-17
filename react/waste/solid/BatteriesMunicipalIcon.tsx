import { forwardRef } from "react";

const BatteriesMunicipalIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="15" x="5" y="6" fill="currentColor" opacity=".25" rx="1.5"/><path fill="currentColor" d="M9 6V4h6v2" opacity=".3"/><rect width="6" height="1.5" x="9" y="13.5" fill="currentColor" rx=".75"/><rect width="1" height="6" x="11.5" y="11" fill="currentColor" rx=".5"/><rect width="14" height="1" x="5" y="16.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

BatteriesMunicipalIcon.displayName = "BatteriesMunicipalIcon";

export default BatteriesMunicipalIcon;
