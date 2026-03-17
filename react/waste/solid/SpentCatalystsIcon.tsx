import { forwardRef } from "react";

const SpentCatalystsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M3 12h3l2-4h8l2 4h4l-2-4h-4l-2 4h-4L8 8H6z" opacity=".25"/><path fill="currentColor" d="M3 12h3l2 4h8l2-4h4l-2 4h-4l-2-4h-4l-2 4H6z" opacity=".25"/><rect width="1" height="8" x="9.5" y="8" fill="currentColor" opacity=".15" rx=".5"/><rect width="1" height="8" x="11.5" y="8" fill="currentColor" opacity=".15" rx=".5"/><rect width="1" height="8" x="13.5" y="8" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

SpentCatalystsIcon.displayName = "SpentCatalystsIcon";

export default SpentCatalystsIcon;
