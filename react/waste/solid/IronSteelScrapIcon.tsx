import { forwardRef } from "react";

const IronSteelScrapIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="12" height="1.5" x="6" y="2.5" fill="currentColor" rx=".75"/><rect width="12" height="1.5" x="6" y="20.5" fill="currentColor" rx=".75"/><path fill="currentColor" d="M9 3h6v18H9z" opacity=".25"/><rect width="6" height="1" x="9" y="7.5" fill="currentColor" opacity=".15" rx=".5"/><rect width="6" height="1" x="9" y="15.5" fill="currentColor" opacity=".15" rx=".5"/>
    </svg>
  )
);

IronSteelScrapIcon.displayName = "IronSteelScrapIcon";

export default IronSteelScrapIcon;
