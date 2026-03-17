import { forwardRef } from "react";

const AbsorbentMaterialsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="12" x="4" y="6" fill="currentColor" rx="2"/><circle cx="8" cy="10" r="1" fill="#fff" opacity=".3"/><circle cx="12" cy="12" r="1" fill="#fff" opacity=".3"/><circle cx="16" cy="10" r="1" fill="#fff" opacity=".3"/><circle cx="10" cy="15" r="1" fill="#fff" opacity=".2"/><circle cx="15" cy="14" r="1" fill="#fff" opacity=".2"/>
    </svg>
  )
);

AbsorbentMaterialsIcon.displayName = "AbsorbentMaterialsIcon";

export default AbsorbentMaterialsIcon;
