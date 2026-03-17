import { forwardRef } from "react";

const BilgeOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m3 14 3-4h12l3 4q-3 3-9 3c-6 0-7-1-9-3z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 10V6h8v4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3v3"/><path stroke="currentColor" strokeLinecap="round" d="M3 19q3-1.5 6 0c3 1.5 4 1 6 0s4-1 6 0" opacity=".4"/>
    </svg>
  )
);

BilgeOilsIcon.displayName = "BilgeOilsIcon";

export default BilgeOilsIcon;
