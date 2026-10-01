import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type TextLinkProps = {
  href: URL;
  className?: string;
  children: ReactNode;
};

export const TextLink = ({
  href,
  className,
  children,
}: Readonly<TextLinkProps>) => {
  const classNames = twMerge(
    `
      relative
      text-spot
      after:absolute
      after:left-0
      after:-bottom-0.5
      after:ease-in-out
      after:duration-300
      after:bg-spot
      after:h-0.5
      after:opacity-0
      after:w-full
      hover:after:opacity-100
      focus-visible:after:opacity-100
    `,
    className,
  );

  return (
    <a href={href.toString()} className={classNames}>
      {children}
    </a>
  );
};
