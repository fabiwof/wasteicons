import { forwardRef } from "react";

const HardeningSludgeIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 12h16"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 12v5h12v-5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 17h18"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 12V8c0-2 2-4 4-4s4 2 4 4v4"/>
    </svg>
  )
);

HardeningSludgeIcon.displayName = "HardeningSludgeIcon";

export default HardeningSludgeIcon;
