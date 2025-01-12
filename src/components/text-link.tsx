import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type TextLinkOptions = {
  isExternal: boolean;
  classNameOverrides?: string | undefined;
};

const TextLinkOptionsDefaults: TextLinkOptions = {
  isExternal: false,
  classNameOverrides: undefined,
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
  const { isExternal, classNameOverrides } = {
    ...TextLinkOptionsDefaults,
    ...optionsOverrides,
  };

  const defaultClassName = `relative \
        text-spot \
        after:absolute \
        after:left-0 \
        after:-bottom-0.5 \
        after:ease-in-out \
        after:duration-300 \
        after:bg-spot \
        after:h-0.5 \
        after:opacity-0 \
        after:w-full \
        after:hover:opacity-100 \
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
