import { forwardRef } from "react";

const ElectronicsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="13" x="3" y="3" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><rect width="12" height="7" x="6" y="6" stroke="currentColor" opacity=".4" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20h6m-3-4v4"/>
    </svg>
  )
);

ElectronicsIcon.displayName = "ElectronicsIcon";

export default ElectronicsIcon;
