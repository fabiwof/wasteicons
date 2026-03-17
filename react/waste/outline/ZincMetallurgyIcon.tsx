import { forwardRef } from "react";

const ZincMetallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="4" x="3" y="7" stroke="currentColor" strokeWidth="1.5" rx=".5"/><rect width="18" height="4" x="3" y="13" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M7 7v4m6-4v4m-6 2v4m6-4v4" opacity=".3"/>
    </svg>
  )
);

ZincMetallurgyIcon.displayName = "ZincMetallurgyIcon";

export default ZincMetallurgyIcon;
