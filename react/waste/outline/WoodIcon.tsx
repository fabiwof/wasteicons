import { forwardRef } from "react";

const WoodIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="18" cy="12" stroke="currentColor" strokeWidth="1.5" rx="3" ry="7"/><ellipse cx="18" cy="12" stroke="currentColor" strokeWidth=".75" opacity=".3" rx="1.2" ry="3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M18 5H6c-2 0-3 3-3 7s1 7 3 7h12"/><path stroke="currentColor" strokeWidth=".75" d="M5 9h11M5 12h11M5 15h11" opacity=".3"/>
    </svg>
  )
);

WoodIcon.displayName = "WoodIcon";

export default WoodIcon;
