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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 3 2 20h20z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 9v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path stroke="currentColor" strokeWidth=".75" d="M6 18h12" opacity=".3"/>
    </svg>
  )
);

PcbConstructionWasteIcon.displayName = "PcbConstructionWasteIcon";

export default PcbConstructionWasteIcon;
