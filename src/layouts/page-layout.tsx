import type { ReactNode } from "react";
import { Footer } from "@/components/footer.tsx";

export function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto] p-5">
      {children}
      <Footer />
    </div>
  );
}
