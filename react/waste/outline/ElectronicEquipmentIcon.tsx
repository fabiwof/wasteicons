import { forwardRef } from "react";

const ElectronicEquipmentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="12" x="3" y="4" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><rect width="12" height="6" x="6" y="7" stroke="currentColor" opacity=".4" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20h6m-3-4v4"/><path stroke="currentColor" strokeLinecap="round" d="M18 8h2m-2 4h2" opacity=".4"/>
    </svg>
  )
);

ElectronicEquipmentIcon.displayName = "ElectronicEquipmentIcon";

export default ElectronicEquipmentIcon;
