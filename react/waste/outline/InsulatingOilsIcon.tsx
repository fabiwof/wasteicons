import { forwardRef } from "react";

const InsulatingOilsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="14" height="16" x="5" y="4" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 4h14"/><circle cx="9" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" d="M9 9.5v-2m0 7v2m6-7v-2m0 7v2" opacity=".4"/>
    </svg>
  )
);

InsulatingOilsIcon.displayName = "InsulatingOilsIcon";

export default InsulatingOilsIcon;
