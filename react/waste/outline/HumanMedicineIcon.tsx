import { forwardRef } from "react";

const HumanMedicineIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 2 3 3-1.5 1.5-3-3z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.5 5.5-9 9-2.5 1L5 18l-2 2 2-2 2.5-1 1-2.5z"/><path stroke="currentColor" strokeLinecap="round" d="m14 7-1 1m-1 1-1 1m-1 1-1 1" opacity=".4"/>
    </svg>
  )
);

HumanMedicineIcon.displayName = "HumanMedicineIcon";

export default HumanMedicineIcon;
