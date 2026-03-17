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
      <rect width="16" height="18" x="4" y="3" stroke="currentColor" strokeWidth="1.5" rx="1"/><path stroke="currentColor" d="M4 9h16M4 15h16" opacity=".3"/><path stroke="currentColor" d="M12 3v18" opacity=".3"/>
    </svg>
  )
);

CompositePackagingIcon.displayName = "CompositePackagingIcon";

export default CompositePackagingIcon;
