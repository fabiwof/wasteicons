import { forwardRef } from "react";

const SortedFractionsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h7v14H3z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M14 7h7v14h-7z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 5h7"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14 5h7"/><path stroke="currentColor" strokeLinecap="round" d="M5 12h3m8 0h3" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M5 15h2m9 0h2" opacity=".3"/>
    </svg>
  )
);

SortedFractionsIcon.displayName = "SortedFractionsIcon";

export default SortedFractionsIcon;
