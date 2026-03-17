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
      <rect width="14" height="15" x="5" y="6" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 6V4h6v2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 14h6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 11v6"/><path stroke="currentColor" strokeWidth=".75" d="M5 17h14" opacity=".3"/>
    </svg>
  )
);

BatteriesMunicipalIcon.displayName = "BatteriesMunicipalIcon";

export default BatteriesMunicipalIcon;
