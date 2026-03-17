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
      <circle cx="12" cy="11" r="7" fill="currentColor"/><path stroke="#fff" strokeLinecap="round" d="M12 4v2m0 10v2m-7-7h2m10 0h2" opacity=".2"/><rect width="4" height="1" x="10" y="20" fill="currentColor" rx=".5"/>
    </svg>
  )
);

CementConcreteIcon.displayName = "CementConcreteIcon";

export default CementConcreteIcon;
