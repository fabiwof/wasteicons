import { forwardRef } from "react";

const ScrapMetalIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="12" cy="5" stroke="currentColor" strokeWidth="1.5" rx="5" ry="2"/><path stroke="currentColor" strokeWidth="1.5" d="M7 5v3l-1 3 1 3v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3l1-3-1-3V5"/><path stroke="currentColor" strokeWidth=".75" d="M7 8c0 1 2.2 2 5 2s5-1 5-2" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M6 14c0 1 2.7 2 6 2s6-1 6-2" opacity=".3"/>
    </svg>
  )
);

ScrapMetalIcon.displayName = "ScrapMetalIcon";

export default ScrapMetalIcon;
