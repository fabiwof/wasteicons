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
      <path fill="currentColor" d="m3 20 5-5 3 2 4-7 3 4 3-3v9z" opacity=".25"/><rect width="5" height="1.3" x="6" y="7.5" fill="currentColor" rx=".65"/><rect width="1.3" height="5" x="5.5" y="8" fill="currentColor" rx=".65"/><circle cx="16" cy="7" r="2.5" fill="currentColor" opacity=".35"/><circle cx="16" cy="7" r="1" fill="#fff" opacity=".4"/>
    </svg>
  )
);

MixedScrapIcon.displayName = "MixedScrapIcon";

export default MixedScrapIcon;
