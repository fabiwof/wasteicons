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
      <rect width="18" height="13" x="3" y="7" fill="currentColor" rx="1.5"/><path fill="currentColor" d="M9.5 4h5L16 7H8z"/><circle cx="12" cy="13" r="3.5" fill="#fff" opacity=".25"/><circle cx="12" cy="13" r="1.5" fill="currentColor"/>
    </svg>
  )
);

PhotographicIndustryIcon.displayName = "PhotographicIndustryIcon";

export default PhotographicIndustryIcon;
