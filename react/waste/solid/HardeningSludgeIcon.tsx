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
      <rect width="18" height="2" x="3" y="11" fill="currentColor" rx=".5"/><path fill="currentColor" d="M6 12v5h12v-5z"/><rect width="18" height="1.5" x="3" y="16.5" fill="currentColor" rx=".5"/><path fill="currentColor" d="M8 12V8c0-2 2-4 4-4s4 2 4 4v4z" opacity=".7"/>
    </svg>
  )
);

HardeningSludgeIcon.displayName = "HardeningSludgeIcon";

export default HardeningSludgeIcon;
