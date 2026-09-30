export type TextLinkProps = {
  href: URL;
  children: React.ReactNode;
};

export const TextLink = ({ href, children }: Readonly<TextLinkProps>) => {
  const classNames = `
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
    `;

  return (
    <a href={href.toString()} className={classNames}>
      {children}
    </a>
  );
};
