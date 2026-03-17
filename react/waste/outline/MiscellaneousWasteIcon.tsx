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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 9h18v12H3z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m3 9 3-4h12l3 4"/><circle cx="8" cy="15" r="2" stroke="currentColor" opacity=".4"/><rect width="4" height="5" x="13" y="12" stroke="currentColor" opacity=".4" rx=".5"/><path stroke="currentColor" strokeLinecap="round" d="M10 9V7m5 2V6" opacity=".4"/>
    </svg>
  )
);

MiscellaneousWasteIcon.displayName = "MiscellaneousWasteIcon";

export default MiscellaneousWasteIcon;
