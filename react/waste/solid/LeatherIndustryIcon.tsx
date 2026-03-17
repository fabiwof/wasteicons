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
      <path d="M5 6c0-1 1-2 2.5-2S9 6 10 6s2-2 4-2 2 2 4 2c1.5 0 2-.5 2-2"/><path fill="currentColor" d="M5 6v10c0 3 3 5 7 5s7-2 7-5V6"/><path fill="currentColor" d="M5 6c0-1 1-2 2.5-2S9 6 10 6s2-2 4-2 2 2 4 2c1.5 0 2-.5 2-2v2c-.3.3-1 .5-2 .5-2 0-2-2-4-2s-2 2-4 2-1-2-2.5-2S5.3 5 5 6" opacity=".3"/><rect width="8" height="1" x="8" y="10.5" fill="#fff" opacity=".2" rx=".5"/><rect width="6" height="1" x="8" y="13.5" fill="#fff" opacity=".2" rx=".5"/>
    </svg>
  )
);

LeatherIndustryIcon.displayName = "LeatherIndustryIcon";

export default LeatherIndustryIcon;
