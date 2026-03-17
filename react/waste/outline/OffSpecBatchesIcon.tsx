import { forwardRef } from "react";

const OffSpecBatchesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 3h8v4l2 3v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8l2-3z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 3h8"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m9 12 6 6m0-6-6 6"/>
    </svg>
  )
);

OffSpecBatchesIcon.displayName = "OffSpecBatchesIcon";

export default OffSpecBatchesIcon;
