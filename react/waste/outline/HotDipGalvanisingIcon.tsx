import { forwardRef } from "react";

const HotDipGalvanisingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="10" x="3" y="10" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeWidth=".75" d="M3 15h18" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 10V6m8 4V6"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 6h8"/><path stroke="currentColor" strokeWidth="1.5" d="M12 6v4"/>
    </svg>
  )
);

HotDipGalvanisingIcon.displayName = "HotDipGalvanisingIcon";

export default HotDipGalvanisingIcon;
