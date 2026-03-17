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
      <rect width="18" height="4" x="3" y="7" fill="currentColor" rx=".5"/><rect width="18" height="4" x="3" y="13" fill="currentColor" rx=".5"/><path stroke="#fff" strokeWidth=".75" d="M7 7v4m6-4v4" opacity=".2"/><path stroke="#fff" strokeWidth=".75" d="M7 13v4m6-4v4" opacity=".2"/>
    </svg>
  )
);

ZincMetallurgyIcon.displayName = "ZincMetallurgyIcon";

export default ZincMetallurgyIcon;
