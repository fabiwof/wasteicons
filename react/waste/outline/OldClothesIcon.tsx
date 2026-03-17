import { forwardRef } from "react";

const OldClothesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 3 3 7l3 3 2-2v13h8V8l2 2 3-3-5-4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 3c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M8 14h8" opacity=".3"/>
    </svg>
  )
);

OldClothesIcon.displayName = "OldClothesIcon";

export default OldClothesIcon;
