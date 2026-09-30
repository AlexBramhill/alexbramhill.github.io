import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/home.tsx";
import { siteUrl } from "@/lib/site.ts";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
  }),
  component: Home,
});
