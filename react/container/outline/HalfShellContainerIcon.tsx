import { forwardRef } from "react";

const HalfShellContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="34" height="14" x="3" y="10" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeWidth=".75" d="M9 10v14m6-14v14m6-14v14m6-14v14m6-14v14" opacity=".25"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3 14-2-4"/><circle cx="35" cy="26" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
);

HalfShellContainerIcon.displayName = "HalfShellContainerIcon";

export default HalfShellContainerIcon;
