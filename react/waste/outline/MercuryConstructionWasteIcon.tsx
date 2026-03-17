import { forwardRef } from "react";

const MercuryConstructionWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 3 2 20h20z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 9v5"/><circle cx="12" cy="17" r="1" fill="currentColor"/>
    </svg>
  )
);

MercuryConstructionWasteIcon.displayName = "MercuryConstructionWasteIcon";

export default MercuryConstructionWasteIcon;
