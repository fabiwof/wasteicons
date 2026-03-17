import { forwardRef } from "react";

const HydrometallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M5 4h14v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><rect width="14" height="2" x="5" y="3" fill="currentColor" rx=".5"/><path fill="#fff" d="M5 12c3-1 5-1 7 0s4 1 7 0v1c-3 1-5 1-7 0s-4-1-7 0z" opacity=".2"/><path fill="#fff" d="M5 16c3-1 5-1 7 0s4 1 7 0v1c-3 1-5 1-7 0s-4-1-7 0z" opacity=".15"/>
    </svg>
  )
);

HydrometallurgyIcon.displayName = "HydrometallurgyIcon";

export default HydrometallurgyIcon;
