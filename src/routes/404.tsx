import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/pages/not-found.tsx";

export const Route = createFileRoute("/404")({
  component: NotFound,
});
