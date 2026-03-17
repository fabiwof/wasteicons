import { forwardRef } from "react";

const PaperPulpIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M6 3h9l4 4v14H6z"/><path fill="currentColor" d="M15 3v4h4" opacity=".3"/><rect width="6" height="1" x="9" y="8.5" fill="#fff" opacity=".2" rx=".5"/><rect width="6" height="1" x="9" y="11.5" fill="#fff" opacity=".2" rx=".5"/><rect width="4" height="1" x="9" y="14.5" fill="#fff" opacity=".2" rx=".5"/>
    </svg>
  )
);

PaperPulpIcon.displayName = "PaperPulpIcon";

export default PaperPulpIcon;
