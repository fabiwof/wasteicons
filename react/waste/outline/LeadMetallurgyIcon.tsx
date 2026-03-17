import { forwardRef } from "react";

const LeadMetallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 10h16v10H4z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m6 10 2-6h8l2 6"/><path stroke="currentColor" strokeWidth=".75" d="M4 14h16M4 17h16" opacity=".3"/>
    </svg>
  )
);

LeadMetallurgyIcon.displayName = "LeadMetallurgyIcon";

export default LeadMetallurgyIcon;
