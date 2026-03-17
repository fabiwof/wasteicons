import { forwardRef } from "react";

const DrinkingWaterTreatmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M3 3h18l-6 8v6l-4 4V11z" opacity=".2"/><rect width="18" height="1.5" x="3" y="2.5" fill="currentColor" rx=".75"/><rect width="10" height="1" x="7" y="6.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="1" height="2" x="11.5" y="18" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

DrinkingWaterTreatmentIcon.displayName = "DrinkingWaterTreatmentIcon";

export default DrinkingWaterTreatmentIcon;
