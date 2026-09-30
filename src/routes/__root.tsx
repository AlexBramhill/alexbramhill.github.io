import { createRootRoute, Outlet } from "@tanstack/react-router";
import { rootHead } from "@/lib/root-head.ts";
import { NotFound } from "@/pages/not-found.tsx";
import { RootDocument } from "@/components/root-document.tsx";

export const Route = createRootRoute({
  head: rootHead,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}
