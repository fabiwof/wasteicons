import { forwardRef } from "react";

const LeatherTextileIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="7" cy="12" stroke="currentColor" strokeWidth="1.5" rx="3" ry="7"/><ellipse cx="7" cy="12" stroke="currentColor" strokeWidth=".75" opacity=".3" rx="1.2" ry="3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M7 5h12v14H7"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M10 7h7m-7 3h7m-7 3h7m-7 3h7" opacity=".3"/>
    </svg>
  )
);

LeatherTextileIcon.displayName = "LeatherTextileIcon";

export default LeatherTextileIcon;
