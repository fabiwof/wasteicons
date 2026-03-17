import { forwardRef } from "react";

const ClinicalWasteContainerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 28"
      fill="none"
      ref={ref}
      {...props}
    >
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M10 4h20v18l-1 2H11l-1-2z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" d="M9 4h22"/><path stroke="currentColor" strokeLinejoin="round" d="m20 10 4 4-4 4-4-4z" opacity=".4"/><g stroke="currentColor" strokeWidth=".8" opacity=".4"><circle cx="20" cy="14" r=".8"/><path d="M20 13.2c-.8-1.2-2-1.2-2.2 0m2.2 0c.8-1.2 2-1.2 2.2 0M20 14.8c0 1.4 1.2 1.8 2-.4m-2 .4c0 1.4-1.2 1.8-2-.4"/></g><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.2" d="M12 24v2h4v-2m8 0v2h4v-2" opacity=".5"/>
    </svg>
  )
);

ClinicalWasteContainerIcon.displayName = "ClinicalWasteContainerIcon";

export default ClinicalWasteContainerIcon;
