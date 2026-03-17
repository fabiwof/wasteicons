import { forwardRef } from "react";

const MiscellaneousWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M3 9h18v12H3z" opacity=".2"/><path fill="currentColor" d="m3 9 3-4h12l3 4" opacity=".3"/><path fill="currentColor" d="M3 9h18v12H3z" opacity=".15"/><circle cx="8" cy="15" r="2" fill="currentColor" opacity=".4"/><rect width="4" height="5" x="13" y="12" fill="currentColor" opacity=".4" rx=".5"/><rect width="1" height="3" x="9.5" y="6" fill="currentColor" opacity=".4" rx=".5"/><rect width="1" height="4" x="14.5" y="5" fill="currentColor" opacity=".4" rx=".5"/>
    </svg>
  )
);

MiscellaneousWasteIcon.displayName = "MiscellaneousWasteIcon";

export default MiscellaneousWasteIcon;
