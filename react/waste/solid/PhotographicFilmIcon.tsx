import { forwardRef } from "react";

const PhotographicFilmIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="18" x="5" y="3" fill="currentColor" rx="1"/><path stroke="#fff" d="M5 7h14" opacity=".3"/><path stroke="#fff" d="M5 17h14" opacity=".3"/><rect width="8" height="6" x="8" y="9" fill="#fff" opacity=".2" rx=".5"/><path fill="#fff" d="M7 4h1v2H7z" opacity=".25"/><path fill="#fff" d="M11 4h1v2h-1z" opacity=".25"/><path fill="#fff" d="M15 4h1v2h-1z" opacity=".25"/><path fill="#fff" d="M7 18h1v2H7z" opacity=".25"/><path fill="#fff" d="M11 18h1v2h-1z" opacity=".25"/><path fill="#fff" d="M15 18h1v2h-1z" opacity=".25"/>
    </svg>
  )
);

PhotographicFilmIcon.displayName = "PhotographicFilmIcon";

export default PhotographicFilmIcon;
