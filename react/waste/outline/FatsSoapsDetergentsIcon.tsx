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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 10 8-4 8 4v6l-8 4-8-4z"/><path stroke="currentColor" d="m4 10 8 4 8-4m-8 4v6" opacity=".3"/><circle cx="7" cy="5" r="1.5" stroke="currentColor" opacity=".4"/><circle cx="10" cy="3" r="1" stroke="currentColor" strokeWidth=".75" opacity=".3"/>
    </svg>
  )
);

FatsSoapsDetergentsIcon.displayName = "FatsSoapsDetergentsIcon";

export default FatsSoapsDetergentsIcon;
