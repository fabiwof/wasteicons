import { forwardRef } from "react";

const MixedConstructionWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m2 20 5-4 3 2 4-8 3 4 3-3 2 9z" opacity=".25"/><rect width="4" height="4" x="5" y="8" fill="currentColor" opacity=".3" rx=".5"/><path fill="currentColor" d="m13 5 2 3.5h-4z" opacity=".3"/><rect width="2" height="3" x="17" y="7" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

MixedConstructionWasteIcon.displayName = "MixedConstructionWasteIcon";

export default MixedConstructionWasteIcon;
