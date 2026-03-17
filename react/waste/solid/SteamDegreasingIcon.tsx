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
      <path fill="currentColor" d="M4 16h16v4H4z"/><path fill="currentColor" d="M6 16c0-3 2-5 4-5 1 0 2 .5 2 .5s1-.5 2-.5c2 0 4 2 4 5z" opacity=".7"/><path fill="currentColor" d="M8 7c0 1 .5 2 .3 3l-.6 1" opacity=".2"/><circle cx="8" cy="8.5" r="1" fill="currentColor" opacity=".2"/><circle cx="12" cy="7.5" r="1" fill="currentColor" opacity=".2"/><circle cx="16" cy="8.5" r="1" fill="currentColor" opacity=".2"/><path fill="currentColor" d="M12 6c0 1 .5 2 .3 3l-.6 1" opacity=".2"/><path fill="currentColor" d="M16 7c0 1 .5 2 .3 3l-.6 1" opacity=".2"/>
    </svg>
  )
);

SteamDegreasingIcon.displayName = "SteamDegreasingIcon";

export default SteamDegreasingIcon;
