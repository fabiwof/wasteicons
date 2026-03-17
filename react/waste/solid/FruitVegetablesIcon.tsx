import { forwardRef } from "react";

const FruitVegetablesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M12 6c-4 0-7 3-7 7s3 8 7 8 7-4 7-8-3-7-7-7"/><path d="M12 6c0-2 2-3 3-2"/><path fill="currentColor" d="M12 5.5c0-2 1.8-2.8 2.8-2a.5.5 0 0 1-.6.8c-.5-.3-1.2.1-1.2 1.2a.5.5 0 0 1-1 0" opacity=".5"/><rect width="1" height="5" x="11.5" y="6" fill="#fff" opacity=".2" rx=".5"/>
    </svg>
  )
);

FruitVegetablesIcon.displayName = "FruitVegetablesIcon";

export default FruitVegetablesIcon;
