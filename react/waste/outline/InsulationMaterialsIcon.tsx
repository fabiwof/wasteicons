import { forwardRef } from "react";

const InsulationMaterialsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="14" x="3" y="6" stroke="currentColor" strokeWidth="1.5" rx=".5"/><circle cx="19" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="19" cy="13" r="1.5" stroke="currentColor" strokeWidth=".75" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M3 10h14M3 14h14M3 18h14" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M7 6v14m4-14v14" opacity=".3"/>
    </svg>
  )
);

InsulationMaterialsIcon.displayName = "InsulationMaterialsIcon";

export default InsulationMaterialsIcon;
