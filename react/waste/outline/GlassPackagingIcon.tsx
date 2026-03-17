import { forwardRef } from "react";

const GlassPackagingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 3h8v4l2 3v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l2-3z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 3h8"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="m8 14 4-2 4 2" opacity=".3"/>
    </svg>
  )
);

GlassPackagingIcon.displayName = "GlassPackagingIcon";

export default GlassPackagingIcon;
