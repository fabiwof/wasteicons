import { forwardRef } from "react";

const FineChemicalsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M10 3h4v12a4 4 0 0 1-4 0z"/><path fill="currentColor" d="M10 2h4v2h-4z"/><rect width="2" height="2" x="8" y="2" fill="currentColor" rx=".5"/><rect width="2" height="2" x="14" y="2" fill="currentColor" rx=".5"/><path stroke="#fff" strokeWidth=".75" d="M10 10h4" opacity=".2"/><path stroke="#fff" strokeWidth=".75" d="M10 13h4" opacity=".2"/>
    </svg>
  )
);

FineChemicalsIcon.displayName = "FineChemicalsIcon";

export default FineChemicalsIcon;
