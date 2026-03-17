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
      <path fill="currentColor" d="M3 14 8 4h8l5 10z"/><path fill="currentColor" d="M3 14h18v4H3z" opacity=".85"/><path stroke="#fff" strokeWidth=".75" d="M8 14v4" opacity=".2"/><path stroke="#fff" strokeWidth=".75" d="M13 14v4" opacity=".2"/>
    </svg>
  )
);

AluminiumMetallurgyIcon.displayName = "AluminiumMetallurgyIcon";

export default AluminiumMetallurgyIcon;
