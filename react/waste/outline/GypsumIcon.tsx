import { forwardRef } from "react";

const GypsumIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h15l3 3v13H3z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 5v3h3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 9h12M6 13h12M6 17h8" opacity=".3"/>
    </svg>
  )
);

GypsumIcon.displayName = "GypsumIcon";

export default GypsumIcon;
