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
      <rect width="10" height="15" x="7" y="6" fill="currentColor" opacity=".25" rx="3"/><path fill="currentColor" d="M11 4h2v2h-2z" opacity=".3"/><rect width="4" height="1.5" x="10" y="1.5" fill="currentColor" rx=".75"/><rect width="1" height="2" x="11.5" y="2" fill="currentColor" rx=".5"/><rect width="10" height="1" x="7" y="10.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="10" height="1" x="7" y="15.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

PressurisedGasCylindersIcon.displayName = "PressurisedGasCylindersIcon";

export default PressurisedGasCylindersIcon;
