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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 3h4v12a4 4 0 0 1-4 0z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 3h4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 3h2m4 0h2"/><path stroke="currentColor" strokeWidth=".75" d="M10 10h4m-4 3h4" opacity=".3"/>
    </svg>
  )
);

FineChemicalsIcon.displayName = "FineChemicalsIcon";

export default FineChemicalsIcon;
