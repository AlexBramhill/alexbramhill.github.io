import { useEffect, type ReactNode } from "react";
import { HeadContent, Scripts } from "@tanstack/react-router";
import "@/global.css";

function EnableTransitions() {
  useEffect(() => {
    document.documentElement.classList.remove("no-transitions");
  }, []);

  return null;
}

export function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="no-transitions">
      <head>
        <HeadContent />
      </head>
      <body>
        <EnableTransitions />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
