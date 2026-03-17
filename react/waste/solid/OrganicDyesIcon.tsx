import { forwardRef } from "react";

const OrganicDyesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M12 3c-3 5-7 8-7 12a7 7 0 0 0 14 0c0-4-4-7-7-12"/><path stroke="#fff" strokeLinecap="round" d="M9 15c1 1 3 1.5 6 0" opacity=".25"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M10 12h4" opacity=".2"/>
    </svg>
  )
);

OrganicDyesIcon.displayName = "OrganicDyesIcon";

export default OrganicDyesIcon;
