import { forwardRef } from "react";

const AdhesivesSealantsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M10 3h4l1 5H9z"/><rect width="8" height="12" x="8" y="8" fill="currentColor" rx="1"/><rect width="2" height="2" x="11" y="1" fill="currentColor" rx=".5"/><path stroke="#fff" strokeWidth=".75" d="M8 12h8" opacity=".2"/>
    </svg>
  )
);

AdhesivesSealantsIcon.displayName = "AdhesivesSealantsIcon";

export default AdhesivesSealantsIcon;
