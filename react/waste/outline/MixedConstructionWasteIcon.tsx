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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m2 20 5-4 3 2 4-8 3 4 3-3 2 9z"/><rect width="4" height="4" x="5" y="8" stroke="currentColor" opacity=".4" rx=".5"/><path stroke="currentColor" strokeLinejoin="round" d="m13 5 2 3.5h-4z" opacity=".4"/><path stroke="currentColor" strokeLinejoin="round" d="M17 7h2v3h-2z" opacity=".4"/>
    </svg>
  )
);

MixedConstructionWasteIcon.displayName = "MixedConstructionWasteIcon";

export default MixedConstructionWasteIcon;
