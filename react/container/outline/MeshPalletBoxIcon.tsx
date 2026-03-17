import { forwardRef } from "react";

const MeshPalletBoxIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="32" height="18" x="4" y="2" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeDasharray="2 1.5" strokeWidth=".75" d="M12 2v18m8-18v18m8-18v18" opacity=".4"/><path stroke="currentColor" d="M4 11h32"/><rect width="34" height="4" x="3" y="20" stroke="currentColor" strokeWidth="1.2" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M8 24v2m12-2v2m12-2v2" opacity=".5"/>
    </svg>
  )
);

MeshPalletBoxIcon.displayName = "MeshPalletBoxIcon";

export default MeshPalletBoxIcon;
