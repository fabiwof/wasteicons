import { forwardRef } from "react";

const FluorescentTubesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="20" height="4" x="2" y="10" stroke="currentColor" strokeWidth="1.5" rx="2"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M5 10V8h2v2m10 0V8h2v2"/><path stroke="currentColor" strokeLinecap="round" d="m8 8 1-4m7 4-1-4" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="m10 8 .5-3M14 8l-.5-3" opacity=".3"/>
    </svg>
  )
);

FluorescentTubesIcon.displayName = "FluorescentTubesIcon";

export default FluorescentTubesIcon;
