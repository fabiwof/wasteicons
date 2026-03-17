import { forwardRef } from "react";

const ProcessingResiduesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 4h16l-3 8H7z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 4h16"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 12v4h6v-4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 19h10"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 16v3"/><circle cx="9" cy="7" r="1" stroke="currentColor" strokeWidth=".75" opacity=".3"/><circle cx="14" cy="6" r=".8" stroke="currentColor" strokeWidth=".75" opacity=".3"/>
    </svg>
  )
);

ProcessingResiduesIcon.displayName = "ProcessingResiduesIcon";

export default ProcessingResiduesIcon;
