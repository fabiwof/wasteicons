import { forwardRef } from "react";

const WastewaterTreatmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 11c2-1.5 4-1.5 5 0s3 1.5 5 0 3-1.5 5 0"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 15c2-1 3-1 4 0s3 1 5 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M12 3v5" opacity=".4"/>
    </svg>
  )
);

WastewaterTreatmentIcon.displayName = "WastewaterTreatmentIcon";

export default WastewaterTreatmentIcon;
