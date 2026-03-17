import { forwardRef } from "react";

const BulkyWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M4 10h16v7H4z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M6 10V7h12v3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M2 11v6h2v-7m18 1v6h-2v-7"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 20v-3m12 3v-3"/><path stroke="currentColor" d="M10 10v3h4v-3" opacity=".4"/>
    </svg>
  )
);

BulkyWasteIcon.displayName = "BulkyWasteIcon";

export default BulkyWasteIcon;
