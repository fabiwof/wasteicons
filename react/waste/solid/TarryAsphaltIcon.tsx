import { forwardRef } from "react";

const TarryAsphaltIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M2 20h13v-5H2z" opacity=".25"/><path fill="currentColor" d="m2 15 3-5h7l3 5z" opacity=".2"/><path fill="currentColor" d="M5 15h1v5H5z" opacity=".1"/><path fill="currentColor" d="M10 15h1v5h-1z" opacity=".1"/><g><path fill="currentColor" d="m19 10 2.5 4.5h-5z" opacity=".6"/><circle cx="19" cy="14" r=".5" fill="#fff"/><rect width=".8" height="1.5" x="18.6" y="11.8" fill="#fff" rx=".4"/></g>
    </svg>
  )
);

TarryAsphaltIcon.displayName = "TarryAsphaltIcon";

export default TarryAsphaltIcon;
