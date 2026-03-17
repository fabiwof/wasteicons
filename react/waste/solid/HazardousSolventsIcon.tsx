import { forwardRef } from "react";

const HazardousSolventsIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M7 8h8v2l1 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6l1-2z" opacity=".2"/><rect width="4" height="4" x="9" y="4" fill="currentColor" opacity=".3" rx=".5"/><rect width="8" height="1" x="7" y="13.5" fill="currentColor" opacity=".15" rx=".5"/><g><path fill="currentColor" d="m19 10 2.5 4.5h-5z" opacity=".6"/><circle cx="19" cy="14" r=".5" fill="#fff"/><rect width=".8" height="1.5" x="18.6" y="11.8" fill="#fff" rx=".4"/></g>
    </svg>
  )
);

HazardousSolventsIcon.displayName = "HazardousSolventsIcon";

export default HazardousSolventsIcon;
