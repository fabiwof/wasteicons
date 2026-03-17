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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18l-6 8v6l-4 4V11z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 3h18"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 7h10" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M12 18v2" opacity=".4"/>
    </svg>
  )
);

DrinkingWaterTreatmentIcon.displayName = "DrinkingWaterTreatmentIcon";

export default DrinkingWaterTreatmentIcon;
