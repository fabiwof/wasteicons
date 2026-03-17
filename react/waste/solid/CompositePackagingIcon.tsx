import { forwardRef } from "react";

const CompositePackagingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect width="16" height="18" x="4" y="3" fill="currentColor" rx="1"/><path fill="#fff" d="M4 8.5h16v1H4z" opacity=".2"/><path fill="#fff" d="M4 14.5h16v1H4z" opacity=".2"/><path fill="#fff" d="M11.5 3h1v18h-1z" opacity=".2"/>
    </svg>
  )
);

CompositePackagingIcon.displayName = "CompositePackagingIcon";

export default CompositePackagingIcon;
