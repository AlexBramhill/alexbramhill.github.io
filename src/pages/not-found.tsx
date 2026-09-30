import { Link } from "@tanstack/react-router";
import { CenteredLayout } from "@/layouts/centered-layout.tsx";

export function NotFound() {
  return (
    <CenteredLayout className="gap-y-4">
      <h1>Not found</h1>
      <p>
        <Link to="/" className="text-spot">
          Back home
        </Link>
      </p>
    </CenteredLayout>
  );
}
