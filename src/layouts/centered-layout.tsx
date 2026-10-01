import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function CenteredLayout({
  className,
  children,
}: Readonly<{ className?: string; children: ReactNode }>) {
  return (
    <div className="grid place-items-center">
      <div className={twMerge("grid w-full max-w-[22rem] gap-y-6", className)}>
        {children}
      </div>
    </div>
  );
}
