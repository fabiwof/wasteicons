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
      <path fill="currentColor" d="M6 3h12z"/><rect width="12" height="2" x="6" y="2" fill="currentColor" rx=".5"/><path fill="currentColor" d="M6 4v13a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V4z"/><path stroke="#fff" d="M6 8h12" opacity=".3"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M9 12q3 1.5 6 0" opacity=".2"/>
    </svg>
  )
);

PesticidesBiocidesIcon.displayName = "PesticidesBiocidesIcon";

export default PesticidesBiocidesIcon;
