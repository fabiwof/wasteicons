import { forwardRef } from "react";

const CoatingsPaintIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="12" height="14" x="6" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M6 10h12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6V4h6v2"/><circle cx="12" cy="15" r="2" stroke="currentColor" opacity=".4"/>
    </svg>
  )
);

CoatingsPaintIcon.displayName = "CoatingsPaintIcon";

export default CoatingsPaintIcon;
