import { forwardRef } from "react";

const WoodGlassPlasticIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="18" height="4" x="3" y="5" stroke="currentColor" strokeWidth="1.5" rx=".5"/><rect width="18" height="4" x="3" y="10" stroke="currentColor" strokeWidth="1.5" rx=".5"/><rect width="18" height="4" x="3" y="15" stroke="currentColor" strokeWidth="1.5" rx=".5"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 5c0 2 1 3 1 4m7-4c0 2 1 3 1 4" opacity=".3"/><circle cx="10" cy="12" r=".8" stroke="currentColor" strokeWidth=".75" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M6 15c0 1.5.5 2.5 1 4m8-4c0 1.5.5 2.5 1 4" opacity=".3"/>
    </svg>
  )
);

WoodGlassPlasticIcon.displayName = "WoodGlassPlasticIcon";

export default WoodGlassPlasticIcon;
