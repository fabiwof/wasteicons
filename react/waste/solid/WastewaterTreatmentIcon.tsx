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
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity=".15"/><path fill="currentColor" d="M5 11c2-1.5 4-1.5 5 0s3 1.5 5 0 3-1.5 5 0v10c-3-1-5-2-10-2s-7 1-10 2V11z" opacity=".2"/><path fill="currentColor" d="M6 15c2-1 3-1 4 0s3 1 5 0" opacity=".1"/><rect width="1" height="5" x="11.5" y="3" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

WastewaterTreatmentIcon.displayName = "WastewaterTreatmentIcon";

export default WastewaterTreatmentIcon;
