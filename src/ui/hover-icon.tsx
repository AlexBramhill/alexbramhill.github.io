import { twMerge } from "tailwind-merge";
import type { SVGProps } from "react";

export const HoverIcon = ({
  className: classNameProps,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    {...props}
    className={twMerge(
      "fill-foreground transition-colors ease-in-out duration-300 hover:fill-spot",
      classNameProps,
    )}
  />
);
