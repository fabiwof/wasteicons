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
      <rect width="14" height="14" x="3" y="6" fill="currentColor" opacity=".2" rx=".5"/><circle cx="19" cy="13" r="4" fill="currentColor" opacity=".3"/><circle cx="19" cy="13" r="1.5" fill="#fff" opacity=".5"/><path fill="currentColor" d="M3 9.5h14v1H3z" opacity=".1"/><path fill="currentColor" d="M3 13.5h14v1H3z" opacity=".1"/><path fill="currentColor" d="M3 17.5h14v1H3z" opacity=".1"/><path fill="currentColor" d="M6.5 6h1v14h-1z" opacity=".1"/><path fill="currentColor" d="M10.5 6h1v14h-1z" opacity=".1"/>
    </svg>
  )
);

InsulationMaterialsIcon.displayName = "InsulationMaterialsIcon";

export default InsulationMaterialsIcon;
