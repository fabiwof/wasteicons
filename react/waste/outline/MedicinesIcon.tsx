import { forwardRef } from "react";

const MedicinesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="18" x="4" y="3" stroke="currentColor" strokeWidth="1.5" rx="1.5"/><circle cx="9" cy="8" r="2" stroke="currentColor" opacity=".4"/><circle cx="15" cy="8" r="2" stroke="currentColor" opacity=".4"/><circle cx="9" cy="14" r="2" stroke="currentColor" opacity=".4"/><circle cx="15" cy="14" r="2" stroke="currentColor" opacity=".4"/><path stroke="currentColor" strokeWidth=".75" d="M12 3v18" opacity=".3"/><path stroke="currentColor" strokeWidth=".75" d="M4 11h16" opacity=".3"/>
    </svg>
  )
);

MedicinesIcon.displayName = "MedicinesIcon";

export default MedicinesIcon;
