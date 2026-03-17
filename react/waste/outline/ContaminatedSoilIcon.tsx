import { forwardRef } from "react";

const ContaminatedSoilIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 20c2-4 5-10 9-10s5 4 5 10z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M5 17h4m1-2h2" opacity=".3"/><g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m19 10 2.5 4.5h-5z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 12.5v.7"/><circle cx="19" cy="14" r=".4" fill="currentColor"/></g>
    </svg>
  )
);

ContaminatedSoilIcon.displayName = "ContaminatedSoilIcon";

export default ContaminatedSoilIcon;
