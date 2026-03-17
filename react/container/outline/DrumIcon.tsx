import { forwardRef } from "react";

const DrumIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="24" x="12" y="2" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 3h2m16 0h2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 25h2m16 0h2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M12 10h16m-16 8h16" opacity=".35"/>
    </svg>
  )
);

DrumIcon.displayName = "DrumIcon";

export default DrumIcon;
