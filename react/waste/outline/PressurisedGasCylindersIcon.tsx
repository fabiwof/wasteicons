import { forwardRef } from "react";

const PressurisedGasCylindersIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="10" height="15" x="7" y="6" stroke="currentColor" strokeWidth="1.5" rx="3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M11 6V4h2v2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 2h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 2v2"/><path stroke="currentColor" strokeWidth=".75" d="M7 11h10" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M7 16h10" opacity=".3"/>
    </svg>
  )
);

PressurisedGasCylindersIcon.displayName = "PressurisedGasCylindersIcon";

export default PressurisedGasCylindersIcon;
