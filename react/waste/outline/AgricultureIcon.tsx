import { forwardRef } from "react";

const AgricultureIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 21V11"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c-2 0-4-1.5-4-4 2 0 4 1.5 4 4z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c2 0 4-1.5 4-4-2 0-4 1.5-4 4z"/><path stroke="currentColor" strokeLinejoin="round" d="M12 8c-1.5 0-3-1.2-3-3 1.5 0 3 1.2 3 3z" opacity=".4"/><path stroke="currentColor" strokeLinejoin="round" d="M12 8c1.5 0 3-1.2 3-3-1.5 0-3 1.2-3 3z" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" d="m9 17 3-3 3 3" opacity=".3"/>
    </svg>
  )
);

AgricultureIcon.displayName = "AgricultureIcon";

export default AgricultureIcon;
