import { forwardRef } from "react";

const AnaerobicDigestionIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M4 14C4 9 7.5 4 12 4s8 5 8 10z" opacity=".2"/><rect width="16" height="7" x="4" y="14" fill="currentColor" opacity=".25" rx=".5"/><rect width="1" height="2.5" x="11.5" y="2" fill="currentColor" rx=".5"/><rect width="4" height="1" x="10" y="1.5" fill="currentColor" opacity=".4" rx=".5"/><path fill="currentColor" d="M4 16.5h16v1H4z" opacity=".1"/>
    </svg>
  )
);

AnaerobicDigestionIcon.displayName = "AnaerobicDigestionIcon";

export default AnaerobicDigestionIcon;
