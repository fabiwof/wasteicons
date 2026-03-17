import { forwardRef } from "react";

const TilesCeramicsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth="1.5" d="M3 12h18m-9-9v18"/><path stroke="currentColor" strokeWidth=".75" d="M6 6h3v3H6zm9 0h3v3h-3zm-9 9h3v3H6zm9 0h3v3h-3z" opacity=".3"/>
    </svg>
  )
);

TilesCeramicsIcon.displayName = "TilesCeramicsIcon";

export default TilesCeramicsIcon;
