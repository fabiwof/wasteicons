import { forwardRef } from "react";

const AluminiumMetallurgyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 14 8 4h8l5 10z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 14v4h18v-4"/><path stroke="currentColor" strokeWidth=".75" d="M8 14v4m5-4v4" opacity=".3"/>
    </svg>
  )
);

AluminiumMetallurgyIcon.displayName = "AluminiumMetallurgyIcon";

export default AluminiumMetallurgyIcon;
