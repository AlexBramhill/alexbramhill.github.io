import { CenteredLayout } from "@/layouts/centered-layout.tsx";
import { siteUrl } from "@/lib/site.ts";
import { TextLink } from "@/ui/text-link.tsx";

export function NotFound() {
  return (
    <CenteredLayout>
      <h1>Not found</h1>
      <p>
        <TextLink href={new URL("/", siteUrl)}>Back home</TextLink>
      </p>
    </CenteredLayout>
  );
}
