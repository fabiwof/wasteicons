import { forwardRef } from "react";

const PesticidesBiocidesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 3h12"/><path stroke="currentColor" strokeWidth="1.5" d="M6 8h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 12q3 1.5 6 0" opacity=".3"/>
    </svg>
  )
);

PesticidesBiocidesIcon.displayName = "PesticidesBiocidesIcon";

export default PesticidesBiocidesIcon;
