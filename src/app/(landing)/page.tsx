import { TextLink } from "@/components/text-link";
import { Github } from "../svg/github";
import { LinkedIn } from "../svg/linkedin";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-dvh px-5 sm:px-10">
      <div className="grid gap-3 max-w-sm">
        <div className="grid grid-cols-[1fr,auto] gap-3 items-end">
          <h1 className="text-4xl font-bold">
            Alex <br />
            Bramhill
          </h1>
          <div className="grid gap-3 mb-2 grid-cols-[auto,auto] animate-fade-in opacity-0">
            <a href="https://github.com/alexbramhill/">
              <Github className="h-7 w-7" />
            </a>
            <a href="https://www.linkedin.com/in/bramhill/">
              <LinkedIn className="h-7 w-7" />
            </a>
          </div>
        </div>
        <hr className="w-full bg-foreground h-1 animate-stretch-width opacity-0" />

        <div className="text-left animate-fade-in opacity-0">
          <p className="pt-0">
            Backend-focused full-stack senior software developer currently
            working at{" "}
            <TextLink href={"https://www.softwire.com"}>Softwire</TextLink>.
          </p>
          <p>
            Previously studied and practiced architecture at world-leading
            universities and firms, specialising in machine learning and
            computational complex geometry.
          </p>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      OVERRIDE
      {page}
      tester
    </>
  );
};
