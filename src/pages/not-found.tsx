import { CenteredLayout } from "@/layouts/centered-layout.tsx";
import { RouteTextLink } from "@/ui/text-link.tsx";

export function NotFound() {
  return (
    <CenteredLayout>
      <h1>Not found</h1>
      <p>
        <RouteTextLink to="/">Back home</RouteTextLink>
      </p>
    </CenteredLayout>
  );
}
