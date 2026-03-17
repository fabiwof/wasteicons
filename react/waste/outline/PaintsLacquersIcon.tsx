import { forwardRef } from "react";

const PaintsLacquersIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="6" x="3" y="3" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M17 6h2v6h-6v-2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 12v8"/>
    </svg>
  )
);

PaintsLacquersIcon.displayName = "PaintsLacquersIcon";

export default PaintsLacquersIcon;
