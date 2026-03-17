import { forwardRef } from "react";

const PreciousMetalsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 4h10l3 5-8 13L4 9z"/><path stroke="currentColor" strokeWidth="1.5" d="M4 9h16"/><path stroke="currentColor" strokeWidth=".75" d="m7 4 5 5 5-5m-5 5H4m8 0h8m-8 0v13" opacity=".3"/>
    </svg>
  )
);

PreciousMetalsIcon.displayName = "PreciousMetalsIcon";

export default PreciousMetalsIcon;
