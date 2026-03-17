import { forwardRef } from "react";

const CoalPyrolysisIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 14c0-3 2-5 6-5s6 2 6 5c0 4-3 7-6 7s-6-3-6-7z"/><path stroke="currentColor" strokeLinecap="round" d="M8 5c0 2 1 3 0 4m4-5c0 2 1 3 0 4m4-3c0 2 1 3 0 4" opacity=".4"/>
    </svg>
  )
);

CoalPyrolysisIcon.displayName = "CoalPyrolysisIcon";

export default CoalPyrolysisIcon;
