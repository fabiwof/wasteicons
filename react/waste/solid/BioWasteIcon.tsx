import { forwardRef } from "react";

const BioWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M12 6c-4 0-7 3-7 7s3 8 7 8 7-4 7-8-3-7-7-7" opacity=".25"/><path fill="currentColor" d="M12 6c0-2 2-4 4-3" opacity=".3"/><path fill="currentColor" d="M11.5 6h1v6h-1z" opacity=".2"/><path fill="currentColor" d="M9 10q3 1.5 6 0" opacity=".1"/><path fill="currentColor" d="M9 15q3 1.5 6 0" opacity=".1"/>
    </svg>
  )
);

BioWasteIcon.displayName = "BioWasteIcon";

export default BioWasteIcon;
