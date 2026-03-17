import { forwardRef } from "react";

const CeramicsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M8 4h8v2q3 1.5 3 6c0 4-2 7-3 8v1H8v-1c-1-1-3-4-3-8q0-4.5 3-6z"/><path fill="currentColor" d="M8 3h8v2H8z"/>
    </svg>
  )
);

CeramicsIcon.displayName = "CeramicsIcon";

export default CeramicsIcon;
