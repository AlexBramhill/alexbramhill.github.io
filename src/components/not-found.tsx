import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="grid place-items-center min-h-dvh px-5 sm:px-10">
      <div className="grid gap-y-4 max-w-[22rem]">
        <h1>Not found</h1>
        <p>
          <Link to="/" className="text-spot">
            Back home
          </Link>
        </p>
      </div>
    </div>
  );
}
