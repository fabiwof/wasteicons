import { forwardRef } from "react";

const VeterinaryMedicineIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="8" cy="7" stroke="currentColor" strokeWidth="1.5" rx="2" ry="2.5"/><ellipse cx="16" cy="7" stroke="currentColor" strokeWidth="1.5" rx="2" ry="2.5"/><ellipse cx="5" cy="13" stroke="currentColor" strokeWidth="1.5" rx="1.5" ry="2"/><ellipse cx="19" cy="13" stroke="currentColor" strokeWidth="1.5" rx="1.5" ry="2"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 17c1 3 2.5 4 4 4s3-1 4-4c-1.5-1.5-3-2-4-2s-2.5.5-4 2z"/>
    </svg>
  )
);

VeterinaryMedicineIcon.displayName = "VeterinaryMedicineIcon";

export default VeterinaryMedicineIcon;
