import { forwardRef } from "react";

const AcidsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M9 3h6v6l4 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L9 9z"/><path fill="currentColor" d="M9 2h6v2H9z"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m10 14 1.5-2 1 1.5L14 12" opacity=".3"/>
    </svg>
  )
);

AcidsIcon.displayName = "AcidsIcon";

export default AcidsIcon;
