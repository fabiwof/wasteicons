import { forwardRef } from "react";

const PlasticPackagingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 3h6v3l1 2v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8l1-2z"/><path stroke="currentColor" d="M9 12h6" opacity=".3"/>
    </svg>
  )
);

PlasticPackagingIcon.displayName = "PlasticPackagingIcon";

export default PlasticPackagingIcon;
