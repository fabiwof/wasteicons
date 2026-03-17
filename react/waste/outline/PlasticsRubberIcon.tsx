import { forwardRef } from "react";

const PlasticsRubberIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
);

PlasticsRubberIcon.displayName = "PlasticsRubberIcon";

export default PlasticsRubberIcon;
