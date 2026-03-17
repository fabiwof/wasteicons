import { forwardRef } from "react";

const ConstructionDemolitionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m4 11 8-7 8 7H6z" opacity=".2"/><path fill="currentColor" d="M6 10v10h12V10z" opacity=".25"/><path fill="currentColor" d="M10 14h4v6h-4z" opacity=".15"/><path d="m14 4 4 4m0-4-4 4"/><rect width="5.4" height="1.2" x="13.3" y="3.5" fill="currentColor" rx=".6" transform="rotate(45 16 6)"/><rect width="5.4" height="1.2" x="13.3" y="3.5" fill="currentColor" rx=".6" transform="rotate(-45 16 6)"/><rect width="3" height="1" x="8" y="12.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="3" height="1" x="13" y="12.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

ConstructionDemolitionIcon.displayName = "ConstructionDemolitionIcon";

export default ConstructionDemolitionIcon;
