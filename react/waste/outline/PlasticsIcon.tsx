import { forwardRef } from "react";

const PlasticsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 3h6v3l1.5 2v10a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 18V8L9 6z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 3h6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 12 2 2 2-2" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 15-2-2-2 2" opacity=".4"/>
    </svg>
  )
);

PlasticsIcon.displayName = "PlasticsIcon";

export default PlasticsIcon;
