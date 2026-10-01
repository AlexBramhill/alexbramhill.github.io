import { twMerge } from "tailwind-merge";
import type { SVGProps } from "react";

export const HoverIcon = ({
  className: classNameProps,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    aria-hidden="true"
    {...props}
    className={twMerge(
      "fill-foreground transition-[fill] duration-300 ease-in-out hover:fill-spot in-focus-visible:fill-spot",
      classNameProps,
    )}
  />
);
