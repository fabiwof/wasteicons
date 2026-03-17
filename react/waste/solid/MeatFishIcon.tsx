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
      <path fill="currentColor" d="M3 12c3-5 7-7 12-7 2 2 3 4 3 7s-1 5-3 7c-5 0-9-2-12-7"/><circle cx="15" cy="10" r="1" fill="#fff" opacity=".5"/><path fill="currentColor" d="M3 12 2 9v6z" opacity=".5"/>
    </svg>
  )
);

MeatFishIcon.displayName = "MeatFishIcon";

export default MeatFishIcon;
