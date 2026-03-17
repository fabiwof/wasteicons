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
      <ellipse cx="7" cy="12" fill="currentColor" rx="3" ry="7"/><ellipse cx="7" cy="12" fill="currentColor" opacity=".2" rx="1.2" ry="3"/><path fill="currentColor" d="M7 5h12v14H7z" opacity=".5"/><path fill="currentColor" d="M10 7h7" opacity=".2"/><rect width="7" height="1" x="10" y="6.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="7" height="1" x="10" y="9.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="7" height="1" x="10" y="12.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="7" height="1" x="10" y="15.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

LeatherTextileIcon.displayName = "LeatherTextileIcon";

export default LeatherTextileIcon;
