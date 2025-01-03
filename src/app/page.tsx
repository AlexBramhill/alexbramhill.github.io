import { LinkedIn } from "./svg/linkedin";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-center ">
      <main className="grid items-center justify-center max-w-xs">
        <span className="text-4xl font-bold">
          Alex <br />
          Bramhill
        </span>
        <hr className="w-full mt-2 mb-4 bg-foreground h-1 animated-expand animated-delay-500ms" />
        <div className="mx-auto">
          <a href="https://www.linkedin.com/in/bramhill/">
            <LinkedIn className="h-6 w-6 fill-foreground hover:fill-subtle animated-fade-in animated-delay-1750ms" />
          </a>
        </div>
      </main>
    </div>
  );
}
