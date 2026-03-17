import { forwardRef } from "react";

const BeverageProductionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 3h8l-1 8v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-9z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 3h8"/><path stroke="currentColor" strokeWidth="1.5" d="M9 11h6"/><path stroke="currentColor" strokeWidth=".75" d="M9 15h6" opacity=".3"/>
    </svg>
  )
);

BeverageProductionIcon.displayName = "BeverageProductionIcon";

export default BeverageProductionIcon;
