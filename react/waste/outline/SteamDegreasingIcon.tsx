import { forwardRef } from "react";

const SteamDegreasingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 16h16v4H4z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 16c0-3 2-5 4-5 1 0 2 .5 2 .5s1-.5 2-.5c2 0 4 2 4 5"/><path stroke="currentColor" strokeLinecap="round" d="M8 8c0 2 1 3 0 4m4-5c0 2 1 3 0 4m4-3c0 2 1 3 0 4" opacity=".4"/>
    </svg>
  )
);

SteamDegreasingIcon.displayName = "SteamDegreasingIcon";

export default SteamDegreasingIcon;
