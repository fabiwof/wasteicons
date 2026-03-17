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
      <path stroke="currentColor" strokeWidth="1.5" d="M4 14C4 9 7.5 4 12 4s8 5 8 10"/><rect width="16" height="7" x="4" y="14" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 4V2"/><path stroke="currentColor" strokeLinecap="round" d="M10 2h4" opacity=".4"/><path stroke="currentColor" strokeWidth=".75" d="M4 17h16" opacity=".3"/>
    </svg>
  )
);

AnaerobicDigestionIcon.displayName = "AnaerobicDigestionIcon";

export default AnaerobicDigestionIcon;
