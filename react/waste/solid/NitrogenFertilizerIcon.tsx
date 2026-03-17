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
      <path fill="currentColor" d="M6 6h12v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path fill="currentColor" d="m8 6 2-3h4l2 3"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 11h6" opacity=".2"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 14h6" opacity=".2"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 17h4" opacity=".2"/>
    </svg>
  )
);

NitrogenFertilizerIcon.displayName = "NitrogenFertilizerIcon";

export default NitrogenFertilizerIcon;
