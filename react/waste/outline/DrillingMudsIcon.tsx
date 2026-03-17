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
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 2v15"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m9 6 3 3 3-3"/><path stroke="currentColor" strokeLinejoin="round" d="m9 10 3 3 3-3" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20c0-2 2-3 5-3s5 1 5 3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 20h14"/>
    </svg>
  )
);

DrillingMudsIcon.displayName = "DrillingMudsIcon";

export default DrillingMudsIcon;
