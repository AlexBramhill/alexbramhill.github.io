import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export const LinkedIn = (props: SVGProps<SVGSVGElement>) => {
  const { className: classNameProps, ...otherProps } = props;
  return (
    <svg
      viewBox="0 0 72 72"
      {...otherProps}
      className={twMerge(
        "fill-foreground \
        transition-color \
        ease-in-out \
        duration-300 \
        hover:fill-spot",
        classNameProps
      )}
    >
      <g fillRule="evenodd">
        <path
          d="M8 72h56c4.4183 0 8-3.5817 8-8V8c0-4.4183-3.5817-8-8-8H8C3.5817 0 0 3.5817 0 8v56c0 4.4183 3.5817 8 8 8Z
        M62 62H51.3156V43.8021c0-4.9893-1.8958-7.7776-5.8449-7.7776-4.296 0-6.5406 2.9016-6.5406 7.7776V62H28.6333V27.3333h10.2968v4.6696s3.096-5.7287 10.4525-5.7287c7.353 0 12.6174 4.4903 12.6174 13.777V62ZM16.3493 22.794C12.8421 22.794 10 19.9297 10 16.397 10 12.8644 12.842 10 16.3493 10c3.5073 0 6.3477 2.8644 6.3477 6.397 0 3.5327-2.8404 6.397-6.3477 6.397ZM11.0326 62h10.7368V27.3333H11.0326V62Z"
        />
      </g>
    </svg>
  );
};
