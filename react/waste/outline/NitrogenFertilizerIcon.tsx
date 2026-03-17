import { forwardRef } from "react";

const NitrogenFertilizerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 6h12v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m8 6 2-3h4l2 3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 11h6m-6 3h6m-6 3h4" opacity=".3"/>
    </svg>
  )
);

NitrogenFertilizerIcon.displayName = "NitrogenFertilizerIcon";

export default NitrogenFertilizerIcon;
