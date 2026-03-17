import { forwardRef } from "react";

const InorganicPigmentsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9c0-3 1.5-6 4-7.5"/><circle cx="8" cy="10" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="12" cy="8" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="16" cy="11" r="1.5" stroke="currentColor" opacity=".5"/><circle cx="14" cy="16" r="1.5" stroke="currentColor" opacity=".5"/>
    </svg>
  )
);

InorganicPigmentsIcon.displayName = "InorganicPigmentsIcon";

export default InorganicPigmentsIcon;
