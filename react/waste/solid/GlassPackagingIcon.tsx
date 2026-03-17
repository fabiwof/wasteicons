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
      <path fill="currentColor" d="M8 3h8v4l2 3v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l2-3z"/><rect width="8" height="1.5" x="8" y="2.5" fill="currentColor" rx=".5"/><path fill="#fff" d="m8 14 4-2 4 2v1l-4-2-4 2z" opacity=".2"/>
    </svg>
  )
);

GlassPackagingIcon.displayName = "GlassPackagingIcon";

export default GlassPackagingIcon;
