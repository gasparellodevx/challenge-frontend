import { FC } from "react";

export const CheckboxIcon: FC<{
  color?: string;
  className?: string;
}> = ({ className, color }) => {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.70709 2.45841L4.43167 7.73346C4.04102 8.12418 3.40732 8.12418 3.0163 7.73346L0.293099 5.01005C-0.0976997 4.61933 -0.0976997 3.98556 0.293099 3.59476C0.683972 3.20389 1.31762 3.20389 1.70832 3.59461L3.7242 5.61051L8.29164 1.04304C8.68252 0.652171 9.31621 0.652467 9.70694 1.04304C10.0977 1.43384 10.0977 2.06739 9.70709 2.45841Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
