import { forwardRef } from "react";

const PalletContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="30" height="17" x="5" y="2" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 2h32"/><path stroke="currentColor" strokeWidth=".75" d="M15 2v17M25 2v17" opacity=".3"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.2" d="M7 19v5h4v-5m7 0v5h4v-5m7 0v5h4v-5" opacity=".5"/>
    </svg>
  )
);

PalletContainerIcon.displayName = "PalletContainerIcon";

export default PalletContainerIcon;
