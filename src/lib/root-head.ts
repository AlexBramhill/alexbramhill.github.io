import type { RootRouteOptions } from "@tanstack/react-router";
import { siteUrl } from "@/lib/site.ts";
import spaceGroteskFontUrl from "@/assets/fonts/SpaceGrotesk-VariableFont_wght.woff2?url";
import globalCssUrl from "@/global.css?url";

const siteDescription =
  "Alex Bramhill is a full-stack tech lead currently working at Softwire";

export const rootHead: RootRouteOptions["head"] = () => {
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Alex Bramhill" },
      { name: "description", content: siteDescription },
      { name: "author", content: "Alex Bramhill" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/` },
      { property: "og:title", content: "Alex Bramhill" },
      { property: "og:description", content: siteDescription },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Alex Bramhill" },
      { name: "twitter:description", content: siteDescription },
      {
        name: "theme-color",
        content: "#fafafa",
        media: "(prefers-color-scheme: light)",
      },
      {
        name: "theme-color",
        content: "#111827",
        media: "(prefers-color-scheme: dark)",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alex Bramhill",
          url: `${siteUrl}/`,
          jobTitle: "Full-Stack Tech Lead",
          worksFor: {
            "@type": "Organization",
            name: "Softwire",
            url: "https://www.softwire.com",
          },
          sameAs: [
            "https://github.com/alexbramhill/",
            "https://www.linkedin.com/in/bramhill/",
          ],
        },
      },
    ],
    links: [
      { rel: "stylesheet", href: globalCssUrl },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "preload",
        href: spaceGroteskFontUrl,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  };
};
