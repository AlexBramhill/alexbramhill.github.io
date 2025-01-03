import { LinkedIn } from "./svg/linkedin";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-center ">
      <main className="grid items-center justify-center max-w-xs">
        <span className="text-4xl font-bold mb-2">
          Alex <br />
          Bramhill
        </span>
        <div className="mx-auto">
          <a href="https://www.linkedin.com/in/bramhill/">
            <LinkedIn className="h-6 w-6 animated-fade-in animated-delay-250ms" />
          </a>
        </div>
      </main>
    </div>
  );
}
