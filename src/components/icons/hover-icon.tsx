import { twMerge } from "tailwind-merge";
import type { SVGProps } from "react";
import { useMounted } from "@/lib/use-mounted.ts";

export const HoverIcon = ({
  className: classNameProps,
  ...props
}: SVGProps<SVGSVGElement>) => {
  const mounted = useMounted();
  return (
    <svg
      width="28"
      height="28"
      {...props}
      className={twMerge(
        "fill-foreground hover:fill-spot",
        mounted && "transition-colors ease-in-out duration-300",
        classNameProps,
      )}
    />
  );
};
