import { forwardRef } from "react";

const AsphaltIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M2 20h20v-6H2z" opacity=".25"/><path fill="currentColor" d="m2 14 3-5h14l3 5z" opacity=".2"/><path fill="currentColor" d="M2 16.5h20v1H2z" opacity=".1"/><path fill="currentColor" d="M8 9h1v5H8z" opacity=".1"/><path fill="currentColor" d="M16 9h1v5h-1z" opacity=".1"/>
    </svg>
  )
);

AsphaltIcon.displayName = "AsphaltIcon";

export default AsphaltIcon;
