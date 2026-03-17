import { forwardRef } from "react";

const FoundryWasteNonFerrousIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M4 8h16v12H4z"/><path fill="currentColor" d="m10 4 2 4 2-4"/><path stroke="#fff" strokeWidth=".75" d="M8 8v12m8-12v12" opacity=".2"/>
    </svg>
  )
);

FoundryWasteNonFerrousIcon.displayName = "FoundryWasteNonFerrousIcon";

export default FoundryWasteNonFerrousIcon;
