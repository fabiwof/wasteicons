import { forwardRef } from "react";

const MiningIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 3-2 2 5 5 2-2z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m14 5-9 9"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 17c1-2 3-3 5-3l2 2c0 2-1 4-3 5z"/><path stroke="currentColor" strokeLinejoin="round" d="m14 15 3 1 2 3-1 1-3-2z" opacity=".4"/>
    </svg>
  )
);

MiningIcon.displayName = "MiningIcon";

export default MiningIcon;
