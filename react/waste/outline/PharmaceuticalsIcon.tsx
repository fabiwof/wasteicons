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
      <rect width="16" height="8" x="4" y="8" stroke="currentColor" strokeWidth="1.5" rx="4"/><path stroke="currentColor" strokeWidth="1.5" d="M12 8v8"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 11h3m4 0h3" opacity=".3"/>
    </svg>
  )
);

PharmaceuticalsIcon.displayName = "PharmaceuticalsIcon";

export default PharmaceuticalsIcon;
