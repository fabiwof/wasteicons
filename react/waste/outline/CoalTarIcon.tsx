import { forwardRef } from "react";

const CoalTarIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 2c-3 5-7 9-7 13a7 7 0 0 0 14 0c0-4-4-8-7-13z"/><path stroke="currentColor" strokeLinecap="round" d="M9 14h6" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 17h6" opacity=".3"/>
    </svg>
  )
);

CoalTarIcon.displayName = "CoalTarIcon";

export default CoalTarIcon;
