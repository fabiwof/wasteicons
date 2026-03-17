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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 3h9l4 4v14H6z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 3v4h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 9h6m-6 3h6m-6 3h4" opacity=".3"/>
    </svg>
  )
);

PaperPulpIcon.displayName = "PaperPulpIcon";

export default PaperPulpIcon;
