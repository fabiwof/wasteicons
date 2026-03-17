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
      <rect width="14" height="6" x="3" y="3" fill="currentColor" rx="1"/><path fill="currentColor" d="M17 5h2v7h-6v-2h4z" opacity=".8"/><rect width="2" height="8" x="12" y="12" fill="currentColor" rx=".5"/>
    </svg>
  )
);

PaintsLacquersIcon.displayName = "PaintsLacquersIcon";

export default PaintsLacquersIcon;
