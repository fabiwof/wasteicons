import { forwardRef } from "react";

const DocumentContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="28" height="18" x="6" y="4" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" d="M5 4h30"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 4V3h8v1"/><path stroke="currentColor" strokeWidth=".5" d="M8 9h24M8 13h24M8 17h24" opacity=".25"/><circle cx="10" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="18" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="22" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="30" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
);

DocumentContainerIcon.displayName = "DocumentContainerIcon";

export default DocumentContainerIcon;
