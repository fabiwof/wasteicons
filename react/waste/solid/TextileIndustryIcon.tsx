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
      <ellipse cx="10" cy="6" fill="currentColor" rx="5" ry="2"/><path fill="currentColor" d="M5 6h10v12H5z" opacity=".5"/><ellipse cx="10" cy="18" fill="currentColor" rx="5" ry="2"/><path fill="#fff" d="M5 9.5h10v1H5z" opacity=".15"/><path fill="#fff" d="M5 13.5h10v1H5z" opacity=".15"/><path fill="currentColor" d="m19 3 1 9h-1" opacity=".3"/><path d="M19.5 12c-.8 1.6-1.6 3.2-2.5 6"/><rect width="1" height="7" x="17" y="12" fill="currentColor" opacity=".2" rx=".5" transform="rotate(-15 17.5 15.5)"/>
    </svg>
  )
);

TextileIndustryIcon.displayName = "TextileIndustryIcon";

export default TextileIndustryIcon;
