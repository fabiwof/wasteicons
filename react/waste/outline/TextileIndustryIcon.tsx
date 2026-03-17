import { forwardRef } from "react";

const TextileIndustryIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <ellipse cx="10" cy="6" stroke="currentColor" strokeWidth="1.5" rx="5" ry="2"/><ellipse cx="10" cy="18" stroke="currentColor" strokeWidth="1.5" rx="5" ry="2"/><path stroke="currentColor" strokeWidth="1.5" d="M5 6v12M15 6v12"/><path stroke="currentColor" strokeWidth=".75" d="M5 10h10M5 14h10" opacity=".3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 3 1 9h-1" opacity=".4"/><path stroke="currentColor" strokeLinecap="round" strokeWidth=".75" d="M20 12c-1 2-2 4-3 7" opacity=".3"/>
    </svg>
  )
);

TextileIndustryIcon.displayName = "TextileIndustryIcon";

export default TextileIndustryIcon;
