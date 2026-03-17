import { forwardRef } from "react";

const LandfillLeachateIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 2c-1.5 3-3 5-3 7.5a3 3 0 0 0 6 0C15 7 13.5 5 12 2z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 16h16v4H4z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M4 16c3-1 5-1 8 0s5 1 8 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M12 12v4" opacity=".4"/>
    </svg>
  )
);

LandfillLeachateIcon.displayName = "LandfillLeachateIcon";

export default LandfillLeachateIcon;
