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
      <path fill="currentColor" d="M6 4h12l2 6v10H4V10z"/><path stroke="#fff" strokeWidth=".75" d="M4 14h16" opacity=".2"/><path stroke="#fff" strokeWidth=".75" d="M4 17h16" opacity=".2"/>
    </svg>
  )
);

LeadMetallurgyIcon.displayName = "LeadMetallurgyIcon";

export default LeadMetallurgyIcon;
