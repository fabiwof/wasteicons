import { forwardRef } from "react";

const DrillingMudsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="2" height="15" x="11" y="2" fill="currentColor" rx="1"/><path fill="currentColor" d="m9 6 3 3 3-3" opacity=".7"/><path fill="currentColor" d="m9 10 3 3 3-3" opacity=".3"/><path fill="currentColor" d="M7 20c0-2 2-3 5-3s5 1 5 3" opacity=".5"/><rect width="14" height="1.5" x="5" y="19.5" fill="currentColor" rx=".5"/>
    </svg>
  )
);

DrillingMudsIcon.displayName = "DrillingMudsIcon";

export default DrillingMudsIcon;
