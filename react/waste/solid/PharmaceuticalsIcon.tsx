import { forwardRef } from "react";

const PharmaceuticalsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="8" x="4" y="8" fill="currentColor" rx="4"/><path stroke="#fff" strokeWidth="1.5" d="M12 8v8" opacity=".3"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M7 11h3" opacity=".2"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M14 11h3" opacity=".2"/>
    </svg>
  )
);

PharmaceuticalsIcon.displayName = "PharmaceuticalsIcon";

export default PharmaceuticalsIcon;
