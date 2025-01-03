import { Github } from "./svg/github";
import { LinkedIn } from "./svg/linkedin";

export default function Home() {
  return (
    <div className="grid min-h-dvh items-center justify-center ">
      <main className="grid gap-3 items-center justify-center max-w-xs">
        <span className="text-4xl font-bold">
          Alex <br />
          Bramhill
        </span>
        <div className="grid grid-cols-[auto-auto] grid-rows-[auto-auto] gap-3 mx-fill animate-fade-in">
          <hr className="col-span-2 w-full bg-foreground h-1" />
          <a
            href="https://www.linkedin.com/in/bramhill/"
            className="justify-self-end"
          >
            <LinkedIn className="h-7 w-7" />
          </a>
          <a
            href="https://github.com/alexbramhill/"
            className="justify-self-start"
          >
            <Github className="h-7 w-7" />
          </a>
        </div>
      </main>
    </div>
  );
}
