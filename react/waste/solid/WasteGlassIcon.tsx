import { forwardRef } from "react";

const WasteGlassIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M9 3h6v3l2 3v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3z" opacity=".2"/><rect width="6" height="1.5" x="9" y="2.5" fill="currentColor" rx=".75"/><rect width="8" height="1" x="8" y="12.5" fill="currentColor" opacity=".15" rx=".5"/><path fill="currentColor" d="m10 7 4-1" opacity=".1"/>
    </svg>
  )
);

WasteGlassIcon.displayName = "WasteGlassIcon";

export default WasteGlassIcon;
