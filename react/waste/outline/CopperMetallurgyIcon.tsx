import { forwardRef } from "react";

const CopperMetallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M12 4v4m0 8v4m-8-8h4m8 0h4" opacity=".3"/>
    </svg>
  )
);

CopperMetallurgyIcon.displayName = "CopperMetallurgyIcon";

export default CopperMetallurgyIcon;
