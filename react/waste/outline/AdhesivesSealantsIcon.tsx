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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 3h4l1 5H9z"/><rect width="8" height="12" x="8" y="8" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth=".75" d="M8 12h8" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3V2"/>
    </svg>
  )
);

AdhesivesSealantsIcon.displayName = "AdhesivesSealantsIcon";

export default AdhesivesSealantsIcon;
