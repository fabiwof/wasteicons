import { forwardRef } from "react";

const WoodworkingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="10" cy="10" r="6" fill="currentColor"/><circle cx="10" cy="10" r="1.5" fill="#fff" opacity=".3"/><path fill="#fff" d="M10 4h.75v2H10z" opacity=".2"/><path fill="#fff" d="M10 14h.75v2H10z" opacity=".2"/><path fill="#fff" d="M4 10h2v.75H4z" opacity=".2"/><path fill="#fff" d="M14 10h2v.75h-2z" opacity=".2"/><rect width="18" height="3" x="3" y="18" fill="currentColor" rx=".5"/><path fill="#fff" d="M7.5 18h1v3h-1z" opacity=".15"/><path fill="#fff" d="M13.5 18h1v3h-1z" opacity=".15"/>
    </svg>
  )
);

WoodworkingIcon.displayName = "WoodworkingIcon";

export default WoodworkingIcon;
