import { forwardRef } from "react";

const WoodPaperIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="12" cy="9" fill="currentColor" rx="8" ry="5"/><path fill="currentColor" d="M4 9v7c0 2.8 3.6 5 8 5s8-2.2 8-5V9" opacity=".5"/><ellipse cx="12" cy="9" fill="currentColor" rx="8" ry="5"/><ellipse cx="12" cy="9" fill="currentColor" opacity=".2" rx="5" ry="3"/><ellipse cx="12" cy="9" fill="currentColor" opacity=".15" rx="2" ry="1.5"/>
    </svg>
  )
);

WoodPaperIcon.displayName = "WoodPaperIcon";

export default WoodPaperIcon;
