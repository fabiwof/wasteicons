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
      <rect width="18" height="18" x="3" y="3" fill="currentColor" opacity=".2" rx=".5"/><path fill="currentColor" d="M3 11.5h18v1H3z" opacity=".3"/><path fill="currentColor" d="M11.5 3h1v18h-1z" opacity=".3"/><rect width="3" height="3" x="6" y="6" fill="currentColor" opacity=".15" rx=".5"/><rect width="3" height="3" x="15" y="6" fill="currentColor" opacity=".15" rx=".5"/><rect width="3" height="3" x="6" y="15" fill="currentColor" opacity=".15" rx=".5"/><rect width="3" height="3" x="15" y="15" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

TilesCeramicsIcon.displayName = "TilesCeramicsIcon";

export default TilesCeramicsIcon;
