import { forwardRef } from "react";

const PcbConstructionWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M12 3 2 20h20z" opacity=".25"/><rect width="1.5" height="4" x="11.25" y="9" fill="currentColor" rx=".75"/><circle cx="12" cy="16" r="1" fill="currentColor"/><rect width="12" height="1" x="6" y="17.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

PcbConstructionWasteIcon.displayName = "PcbConstructionWasteIcon";

export default PcbConstructionWasteIcon;
