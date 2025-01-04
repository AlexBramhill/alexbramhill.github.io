import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type TextLinkOptions = {
  isExternal: boolean;
  classNameOverrides?: string | undefined;
  linkColour: string;
  linkColourHover: string;
};

const TextLinkOptionsDefaults: TextLinkOptions = {
  isExternal: false,
  classNameOverrides: undefined,
  linkColour: "spot",
  linkColourHover: "spot",
};

export type TextLinkProps = {
  href: Url;
  options?: Partial<TextLinkOptions>;
  children: React.ReactNode;
};

export const TextLink = ({
  href,
  options: optionsOverrides = {},
  children,
}: Readonly<TextLinkProps>) => {
  const { isExternal, classNameOverrides, linkColour, linkColourHover } = {
    ...TextLinkOptionsDefaults,
    ...optionsOverrides,
  };

  const defaultClassName = `relative \
        text-${linkColour} \
        transition-color \
        ease-in-out \
        duration-300 \
        hover:text-${linkColourHover} \
        after:absolute \
        after:left-0 \
        after:-bottom-0.5 \
        after:transition-color \
        after:ease-in-out \
        after:duration-300 \
        after:bg-${linkColour} \
        after:w-full \
        after:h-0.5 \
        after:opacity-0 \
        after:hover:opacity-100 \
        after:hover:bg-${linkColourHover} \
      `;

  const classNames = twMerge(defaultClassName, classNameOverrides);

  return isExternal ? (
    <a href={href.toString()} className={classNames}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
};
