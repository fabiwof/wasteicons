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
      <path fill="currentColor" d="M12 2c-1.5 3-3 5-3 7.5a3 3 0 0 0 6 0C15 7 13.5 5 12 2" opacity=".4"/><rect width="16" height="4" x="4" y="16" fill="currentColor" opacity=".25" rx=".5"/><path fill="currentColor" d="M4 16c3-1 5-1 8 0s5 1 8 0" opacity=".15"/><rect width="1" height="4" x="11.5" y="12" fill="currentColor" opacity=".3" rx=".5"/>
    </svg>
  )
);

LandfillLeachateIcon.displayName = "LandfillLeachateIcon";

export default LandfillLeachateIcon;
