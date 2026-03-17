import { forwardRef } from "react";

const AsphaltTarIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 20h20"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 14h18v6H3z"/><path stroke="currentColor" d="M3 17h18" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 10 8-6 8 6"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 10v4h16v-4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 14v-2m4 2v-2" opacity=".3"/>
    </svg>
  )
);

AsphaltTarIcon.displayName = "AsphaltTarIcon";

export default AsphaltTarIcon;
