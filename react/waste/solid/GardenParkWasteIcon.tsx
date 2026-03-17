import { forwardRef } from "react";

const GardenParkWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="9" r="6" fill="currentColor" opacity=".25"/><rect width="1.5" height="7" x="11.25" y="14" fill="currentColor" rx=".75"/><path fill="currentColor" d="M9 7c1.5 1 3 3 6 2.5" opacity=".1"/><path fill="currentColor" d="M8 11c2 1 4 2 7 0" opacity=".1"/><rect width="6" height="1.5" x="9" y="19.5" fill="currentColor" rx=".75"/>
    </svg>
  )
);

GardenParkWasteIcon.displayName = "GardenParkWasteIcon";

export default GardenParkWasteIcon;
