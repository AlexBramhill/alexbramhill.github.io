import { Github } from "./svg/github";
import { LinkedIn } from "./svg/linkedin";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-center ">
      <main className="grid items-center justify-center max-w-xs">
        <span className="text-4xl font-bold mb-2">
          Alex <br />
          Bramhill
        </span>
        <div className="grid grid-cols-[auto_auto] gap-3 mx-auto animated-fade-in animated-delay-250ms">
          <a href="https://www.linkedin.com/in/bramhill/">
            <LinkedIn className="h-7 w-7" />
          </a>
          <a href="https://github.com/alexbramhill/">
            <Github className="h-7 w-7" />
          </a>
        </div>
      </main>
    </div>
  );
}
