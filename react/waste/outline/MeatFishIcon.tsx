import { forwardRef } from "react";

const MeatFishIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3 12c3-5 7-7 12-7 2 2 3 4 3 7s-1 5-3 7c-5 0-9-2-12-7z"/><circle cx="15" cy="10" r="1" fill="currentColor" opacity=".5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12 2 9m1 3-1 3"/>
    </svg>
  )
);

MeatFishIcon.displayName = "MeatFishIcon";

export default MeatFishIcon;
