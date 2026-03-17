import { forwardRef } from "react";

const LeatherIndustryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6c0-1 1-2 2.5-2S9 6 10 6s2-2 4-2 2 2 4 2c1.5 0 2-.5 2-2"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 6v10c0 3 3 5 7 5s7-2 7-5V6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 11h8m-8 3h6" opacity=".3"/>
    </svg>
  )
);

LeatherIndustryIcon.displayName = "LeatherIndustryIcon";

export default LeatherIndustryIcon;
