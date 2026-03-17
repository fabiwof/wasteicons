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
      <path fill="currentColor" d="M11.25 21V11a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.5 0"/><path fill="currentColor" d="M12 11c-2 0-4-1.5-4-4 2 0 4 1.5 4 4"/><path fill="currentColor" d="M12 11c2 0 4-1.5 4-4-2 0-4 1.5-4 4"/><path fill="currentColor" d="M12 8c-1.5 0-3-1.2-3-3 1.5 0 3 1.2 3 3" opacity=".3"/><path fill="currentColor" d="M12 8c1.5 0 3-1.2 3-3-1.5 0-3 1.2-3 3" opacity=".3"/><path fill="currentColor" d="m9 17 3-3 3 3" opacity=".15"/>
    </svg>
  )
);

AgricultureIcon.displayName = "AgricultureIcon";

export default AgricultureIcon;
