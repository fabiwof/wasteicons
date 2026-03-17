import { forwardRef } from "react";

const SortingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="20" height="1.5" x="2" y="14.5" fill="currentColor" rx=".75"/><circle cx="4" cy="18" r="2" fill="currentColor"/><circle cx="20" cy="18" r="2" fill="currentColor"/><circle cx="4" cy="18" r=".8" fill="#fff"/><circle cx="20" cy="18" r=".8" fill="#fff"/><path fill="currentColor" d="M2 15c0 1.7.9 3 2 3h16c1.1 0 2-1.3 2-3" opacity=".2"/><rect width="3" height="5" x="6" y="10" fill="currentColor" opacity=".3" rx=".5"/><circle cx="13" cy="12" r="2.5" fill="currentColor" opacity=".3"/><path fill="currentColor" d="m17 9 2 3-2 3z" opacity=".3"/>
    </svg>
  )
);

SortingIcon.displayName = "SortingIcon";

export default SortingIcon;
