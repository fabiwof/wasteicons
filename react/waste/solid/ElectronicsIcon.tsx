import { forwardRef } from "react";

const ElectronicsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="13" x="3" y="3" fill="currentColor" opacity=".2" rx="1.5"/><rect width="12" height="7" x="6" y="6" fill="currentColor" opacity=".3" rx=".5"/><rect width="6" height="1.5" x="9" y="19.5" fill="currentColor" rx=".75"/><rect width="1" height="4" x="11.5" y="16" fill="currentColor" rx=".5"/>
    </svg>
  )
);

ElectronicsIcon.displayName = "ElectronicsIcon";

export default ElectronicsIcon;
