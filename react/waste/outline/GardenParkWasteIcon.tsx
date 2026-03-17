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
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 21v-7"/><circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 7c1.5 1 3 3 6 2.5" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 11c2 1 4 2 7 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 20h6"/>
    </svg>
  )
);

GardenParkWasteIcon.displayName = "GardenParkWasteIcon";

export default GardenParkWasteIcon;
