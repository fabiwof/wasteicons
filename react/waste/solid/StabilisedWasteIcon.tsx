import { forwardRef } from "react";

const StabilisedWasteIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m4 8 8-5 8 5v9l-8 5-8-5z" opacity=".15"/><path fill="currentColor" d="m4 8 8 5 8-5" opacity=".1"/><path fill="currentColor" d="M12 13v9l-8-5V8z" opacity=".2"/><path fill="currentColor" d="M12 13v9l8-5V8z" opacity=".25"/>
    </svg>
  )
);

StabilisedWasteIcon.displayName = "StabilisedWasteIcon";

export default StabilisedWasteIcon;
