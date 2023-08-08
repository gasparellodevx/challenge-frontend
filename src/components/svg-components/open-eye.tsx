import { FC } from "react";

export const OpenEye: FC<{ color?: string; className?: string }> = ({
  className,
  color = "currentColor",
}) => {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.06641 5.06641C9.61068 4.52214 10.2552 4.25 11 4.25C11.7448 4.25 12.3893 4.52214 12.9336 5.06641C13.4779 5.61068 13.75 6.25521 13.75 7C13.75 7.74479 13.4779 8.38932 12.9336 8.93359C12.3893 9.47786 11.7448 9.75 11 9.75C10.2552 9.75 9.61068 9.47786 9.06641 8.93359C8.52214 8.38932 8.25 7.74479 8.25 7C8.25 6.25521 8.52214 5.61068 9.06641 5.06641ZM7.73438 10.2656C8.65104 11.1536 9.73958 11.5977 11 11.5977C12.2604 11.5977 13.3346 11.1536 14.2227 10.2656C15.1393 9.34896 15.5977 8.26042 15.5977 7C15.5977 5.73958 15.1393 4.66536 14.2227 3.77734C13.3346 2.86068 12.2604 2.40234 11 2.40234C9.73958 2.40234 8.65104 2.86068 7.73438 3.77734C6.84635 4.66536 6.40234 5.73958 6.40234 7C6.40234 8.26042 6.84635 9.34896 7.73438 10.2656ZM4.85547 2.01562C6.6888 0.755208 8.73698 0.125 11 0.125C13.263 0.125 15.3112 0.755208 17.1445 2.01562C18.9779 3.27604 20.2956 4.9375 21.0977 7C20.2956 9.0625 18.9779 10.724 17.1445 11.9844C15.3112 13.2448 13.263 13.875 11 13.875C8.73698 13.875 6.6888 13.2448 4.85547 11.9844C3.02214 10.724 1.70443 9.0625 0.902344 7C1.70443 4.9375 3.02214 3.27604 4.85547 2.01562Z"
        fill={color}
      />
    </svg>
  );
};