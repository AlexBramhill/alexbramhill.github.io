import { HoverReveal } from "@/ui/hover-reveal.tsx";

const commitHash = __COMMIT_HASH__;
const buildTime = __BUILD_TIME__;

const BuildInfo = () => (
  <HoverReveal className="text-xs text-subtle">
    {commitHash.slice(0, 7)} · <time dateTime={buildTime}>{buildTime}</time>
  </HoverReveal>
);

export function Footer() {
  return (
    <footer className="flex justify-end pt-5">
      <BuildInfo />
    </footer>
  );
}
