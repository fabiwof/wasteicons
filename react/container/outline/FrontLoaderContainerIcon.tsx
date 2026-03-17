import { forwardRef } from "react";

const FrontLoaderContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m20 3 16 7-4 14H8L4 10z"/><path stroke="currentColor" strokeLinecap="round" d="M6 11h28"/><rect width="10" height="5" x="14" y="13" stroke="currentColor" opacity=".4" rx="1"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.2" d="M9 24v2h4v-2m14 0v2h4v-2" opacity=".5"/>
    </svg>
  )
);

FrontLoaderContainerIcon.displayName = "FrontLoaderContainerIcon";

export default FrontLoaderContainerIcon;
