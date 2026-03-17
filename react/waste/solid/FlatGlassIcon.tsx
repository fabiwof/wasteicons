import { forwardRef } from "react";

const FlatGlassIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="18" x="5" y="3" fill="currentColor" opacity=".15" rx=".5"/><path fill="currentColor" d="m12 3-2 6 3 3-1 5-1 4" opacity=".3"/><path fill="currentColor" d="m10 9-3 2" opacity=".2"/><path fill="currentColor" d="m13 12 3 1" opacity=".2"/>
    </svg>
  )
);

FlatGlassIcon.displayName = "FlatGlassIcon";

export default FlatGlassIcon;
