import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function CenteredLayout({
  className,
  children,
}: Readonly<{ className?: string; children: ReactNode }>) {
  return (
    <div className="grid place-items-center min-h-dvh px-5 sm:px-10">
      <div className={twMerge("grid gap-y-6 max-w-[22rem]", className)}>
        {children}
      </div>
    </div>
  );
}
