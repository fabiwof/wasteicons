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
      <path fill="currentColor" d="M12 3C8 3 4 5 4 5v8c0 5 8 9 8 9s8-4 8-9V5s-4-2-8-2" opacity=".2"/><rect width="2" height="8" x="11" y="8" fill="currentColor" rx="1"/><rect width="8" height="2" x="8" y="11" fill="currentColor" rx="1"/>
    </svg>
  )
);

MedicalWasteIcon.displayName = "MedicalWasteIcon";

export default MedicalWasteIcon;
