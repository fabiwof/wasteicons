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
      <rect width="12" height="14" x="6" y="6" fill="currentColor" rx="1"/><rect width="6" height="3" x="9" y="3" fill="currentColor" rx=".5"/><path stroke="#fff" d="M6 10h12" opacity=".3"/><circle cx="12" cy="15" r="2" fill="#fff" opacity=".2"/>
    </svg>
  )
);

CoatingsPaintIcon.displayName = "CoatingsPaintIcon";

export default CoatingsPaintIcon;
