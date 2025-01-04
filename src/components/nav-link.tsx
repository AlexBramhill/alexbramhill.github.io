import { Url } from "next/dist/shared/lib/router/router";
import { TextLink, TextLinkOptions, TextLinkProps } from "./text-link";
import { twMerge } from "tailwind-merge";

export const NavLink = ({
  href,
  options: optionsOverrides = {},
  children,
}: Readonly<TextLinkProps>) => {
  const { classNameOverrides, ...restOptionsOverrides } = optionsOverrides;

  const defaultClassName = "font-medium";

  const options: Partial<TextLinkOptions> = {
    classNameOverrides: twMerge(defaultClassName, classNameOverrides),
    linkColour: "foreground",
    linkColourHover: "spot",
    ...restOptionsOverrides,
  };

  return (
    <TextLink href={href} options={options}>
      {children}
    </TextLink>
  );
};
