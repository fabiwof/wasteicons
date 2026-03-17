import { forwardRef } from "react";

const OilWaterSeparatorIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="14" x="3" y="5" fill="currentColor" rx="1"/><path fill="#fff" d="M3 11.5h18V13H3z" opacity=".2"/><path fill="#fff" d="M11.5 5h1v14h-1z" opacity=".2"/><rect width="5" height="1" x="5" y="8.5" fill="#fff" opacity=".2" rx=".5"/><rect width="5" height="1" x="14" y="14.5" fill="#fff" opacity=".2" rx=".5"/>
    </svg>
  )
);

OilWaterSeparatorIcon.displayName = "OilWaterSeparatorIcon";

export default OilWaterSeparatorIcon;
