import { forwardRef } from "react";

const CementConcreteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" d="M12 4v2m0 10v2m-7-7h2m10 0h2" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 20h4v1h-4z"/>
    </svg>
  )
);

CementConcreteIcon.displayName = "CementConcreteIcon";

export default CementConcreteIcon;
