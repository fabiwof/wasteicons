import { forwardRef } from "react";

const PhotographicIndustryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="13" x="3" y="7" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="13" r="1.5" stroke="currentColor" strokeWidth=".75" opacity=".4"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m8 7 1.5-3h5L16 7"/>
    </svg>
  )
);

PhotographicIndustryIcon.displayName = "PhotographicIndustryIcon";

export default PhotographicIndustryIcon;
