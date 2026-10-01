import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const HoverReveal = ({
  className,
  ...props
}: Readonly<ComponentProps<"span">>) => (
  <span
    tabIndex={0}
    {...props}
    className={twMerge(
      "opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 focus:opacity-100",
      className,
    )}
  />
);
