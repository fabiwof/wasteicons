import { forwardRef } from "react";

const AsphaltIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 20h20v-6H2z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m2 14 3-5h14l3 5"/><path stroke="currentColor" strokeWidth=".75" d="M2 17h20" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M8 9v5m8-5v5" opacity=".3"/>
    </svg>
  )
);

AsphaltIcon.displayName = "AsphaltIcon";

export default AsphaltIcon;
