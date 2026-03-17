import { forwardRef } from "react";

const BatteriesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="12" height="14" x="6" y="7" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 7V5h4v2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 3h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 14h6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 11v6"/><path stroke="currentColor" strokeWidth=".75" d="M6 17h12" opacity=".3"/>
    </svg>
  )
);

BatteriesIcon.displayName = "BatteriesIcon";

export default BatteriesIcon;
