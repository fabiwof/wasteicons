import { forwardRef } from "react";

const SortedFractionsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="7" height="14" x="3" y="7" fill="currentColor" opacity=".25" rx=".5"/><rect width="7" height="14" x="14" y="7" fill="currentColor" opacity=".25" rx=".5"/><rect width="7" height="1.5" x="3" y="4.5" fill="currentColor" rx=".75"/><rect width="7" height="1.5" x="14" y="4.5" fill="currentColor" rx=".75"/><rect width="3" height="1" x="5" y="11.5" fill="currentColor" opacity=".3" rx=".5"/><rect width="3" height="1" x="16" y="11.5" fill="currentColor" opacity=".3" rx=".5"/><rect width="2" height="1" x="5" y="14.5" fill="currentColor" opacity=".2" rx=".5"/><rect width="2" height="1" x="16" y="14.5" fill="currentColor" opacity=".2" rx=".5"/>
    </svg>
  )
);

SortedFractionsIcon.displayName = "SortedFractionsIcon";

export default SortedFractionsIcon;
