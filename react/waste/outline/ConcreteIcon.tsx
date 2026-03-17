import { forwardRef } from "react";

const ConcreteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="12" x="3" y="6" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" d="M3 10h18" opacity=".4"/><circle cx="7" cy="8" r=".5" fill="currentColor" opacity=".2"/><circle cx="14" cy="8" r=".5" fill="currentColor" opacity=".2"/><circle cx="10" cy="7.5" r=".4" fill="currentColor" opacity=".15"/><circle cx="17" cy="8.5" r=".4" fill="currentColor" opacity=".15"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 14h5m2 0h5M8 16h4" opacity=".2"/>
    </svg>
  )
);

ConcreteIcon.displayName = "ConcreteIcon";

export default ConcreteIcon;
