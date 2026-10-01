import type { ComponentProps } from "react";
import { createLink } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

export const TextLink = ({
  className,
  ...props
}: Readonly<ComponentProps<"a">>) => (
  <a
    {...props}
    className={twMerge(
      `
        relative
        text-spot
        after:absolute
        after:left-0
        after:-bottom-0.5
        after:h-0.5
        after:w-full
        after:bg-spot
        after:opacity-0
        after:duration-300
        after:ease-in-out
        hover:after:opacity-100
        focus-visible:after:opacity-100
      `,
      className,
    )}
  />
);

export const RouteTextLink = createLink(TextLink);
