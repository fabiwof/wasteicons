import { forwardRef } from "react";

const FatsSoapsDetergentsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m4 10 8-4 8 4v6l-8 4-8-4z"/><path stroke="#fff" d="m4 10 8 4 8-4" opacity=".2"/><path stroke="#fff" d="M12 14v6" opacity=".2"/><circle cx="7" cy="5" r="1.5" fill="currentColor" opacity=".3"/><circle cx="10" cy="3" r="1" fill="currentColor" opacity=".2"/>
    </svg>
  )
);

FatsSoapsDetergentsIcon.displayName = "FatsSoapsDetergentsIcon";

export default FatsSoapsDetergentsIcon;
