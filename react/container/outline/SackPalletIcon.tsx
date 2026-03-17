import { forwardRef } from "react";

const SackPalletIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M8 3q-1 7 0 15h24q1-8 0-15z"/><path stroke="currentColor" strokeWidth=".5" d="M9 7h22M9 11h22M9 15h22" opacity=".3"/><rect width="28" height="4" x="6" y="18" stroke="currentColor" strokeWidth="1.2" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M11 22v3m9-3v3m9-3v3" opacity=".5"/>
    </svg>
  )
);

SackPalletIcon.displayName = "SackPalletIcon";

export default SackPalletIcon;
