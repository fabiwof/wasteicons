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
      <path fill="currentColor" d="M12 2c-3 5-7 9-7 13a7 7 0 0 0 14 0c0-4-4-8-7-13" opacity=".3"/><rect width="6" height="1" x="9" y="13.5" fill="currentColor" opacity=".2" rx=".5"/><rect width="6" height="1" x="9" y="16.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

CoalTarIcon.displayName = "CoalTarIcon";

export default CoalTarIcon;
