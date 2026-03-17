import { forwardRef } from "react";

const VitrifiedWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m6 3 6 9-6 9"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m18 3-6 9 6 9"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 3h12"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 21h12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" d="m9 8 3 4 3-4" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" d="m9 16 3-4 3 4" opacity=".3"/>
    </svg>
  )
);

VitrifiedWasteIcon.displayName = "VitrifiedWasteIcon";

export default VitrifiedWasteIcon;
