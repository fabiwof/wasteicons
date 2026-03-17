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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 6c-4 0-7 3-7 7s3 8 7 8 7-4 7-8-3-7-7-7z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 6c0-2 2-4 4-3"/><path stroke="currentColor" d="M12 6v6" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 10q3 1.5 6 0" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M9 15q3 1.5 6 0" opacity=".3"/>
    </svg>
  )
);

BioWasteIcon.displayName = "BioWasteIcon";

export default BioWasteIcon;
