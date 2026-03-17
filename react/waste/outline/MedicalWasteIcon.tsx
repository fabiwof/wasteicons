import { forwardRef } from "react";

const MedicalWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 3C8 3 4 5 4 5v8c0 5 8 9 8 9s8-4 8-9V5s-4-2-8-2z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 8v8m-4-4h8"/>
    </svg>
  )
);

MedicalWasteIcon.displayName = "MedicalWasteIcon";

export default MedicalWasteIcon;
