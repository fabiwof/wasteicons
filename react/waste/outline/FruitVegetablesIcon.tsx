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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 6c-4 0-7 3-7 7s3 8 7 8 7-4 7-8-3-7-7-7z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 6c0-2 2-3 3-2"/><path stroke="currentColor" d="M12 6v5" opacity=".3"/>
    </svg>
  )
);

FruitVegetablesIcon.displayName = "FruitVegetablesIcon";

export default FruitVegetablesIcon;
