import { forwardRef } from "react";

const MixedScrapIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m3 20 5-5 3 2 4-7 3 4 3-3v9z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 8h5M6 8v5"/><circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" d="m13 5 2 2" opacity=".4"/>
    </svg>
  )
);

MixedScrapIcon.displayName = "MixedScrapIcon";

export default MixedScrapIcon;
