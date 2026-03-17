import { forwardRef } from "react";

const SoilRemediationIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M2 20c3-5 6-10 10-10s7 5 10 10z" opacity=".25"/><rect width="1" height="8" x="11.5" y="2" fill="currentColor" rx=".5"/><path fill="currentColor" d="m9 6 3-4 3 4z"/><rect width="3" height="1" x="7" y="15.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="2" height="1" x="13" y="13.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

SoilRemediationIcon.displayName = "SoilRemediationIcon";

export default SoilRemediationIcon;
