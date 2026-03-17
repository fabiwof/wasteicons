import { forwardRef } from "react";

const CrematoriumIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 10c0-3 2-5 4-5s4 2 4 5v8H8z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 18h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 21h12"/><path stroke="currentColor" strokeLinecap="round" d="M10 3c0 1 1 1.5 2 2s2 1 2 2" opacity=".4"/>
    </svg>
  )
);

CrematoriumIcon.displayName = "CrematoriumIcon";

export default CrematoriumIcon;
