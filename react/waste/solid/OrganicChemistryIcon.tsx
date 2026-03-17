import { forwardRef } from "react";

const OrganicChemistryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m12 3 7.8 4.5v9L12 21l-7.8-4.5v-9z"/><circle cx="12" cy="12" r="2" fill="#fff" opacity=".3"/><path stroke="#fff" strokeLinecap="round" strokeWidth=".75" d="M12 10V7m2 5h3m-3 0 1.5 2.5M12 14v3m-2-5H7m3 0-1.5 2.5" opacity=".25"/>
    </svg>
  )
);

OrganicChemistryIcon.displayName = "OrganicChemistryIcon";

export default OrganicChemistryIcon;
