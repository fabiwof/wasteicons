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
      <rect width="14" height="18" x="5" y="3" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth="1.5" d="M5 7h14M5 17h14"/><rect width="8" height="6" x="8" y="9" stroke="currentColor" opacity=".4" rx=".5"/><path stroke="currentColor" strokeLinecap="round" d="M7 4v2m4-2v2m4-2v2M7 18v2m4-2v2m4-2v2" opacity=".3"/>
    </svg>
  )
);

PhotographicFilmIcon.displayName = "PhotographicFilmIcon";

export default PhotographicFilmIcon;
