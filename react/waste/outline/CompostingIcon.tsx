import { forwardRef } from "react";

const CompostingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 20c2-3 5-8 10-8s8 5 10 8z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M7 16h3m2-2h2m2 3h2" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" d="M8 5c0 2-.7 3 0 5m4-7c0 2-.7 3 0 5m4-3c0 2-.7 3 0 5" opacity=".4"/>
    </svg>
  )
);

CompostingIcon.displayName = "CompostingIcon";

export default CompostingIcon;
