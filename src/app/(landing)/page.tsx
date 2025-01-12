import React from "react";
import { TextLink } from "@/components/text-link";
import { Github } from "../svg/github";
import { LinkedIn } from "../svg/linkedin";

const HeaderInfo = () => (
  <div className="grid grid-cols-[1fr,auto] gap-3 items-end">
    <h1 className="text-4xl font-bold">
      Alex <br />
      Bramhill
    </h1>
    <div className="grid gap-y-6 gap-x-3 mb-2 grid-cols-[auto,auto]">
      <a href="https://github.com/alexbramhill/">
        <Github className="h-7 w-7" />
      </a>
      <a href="https://www.linkedin.com/in/bramhill/">
        <LinkedIn className="h-7 w-7" />
      </a>
    </div>
  </div>
);

const About = () => (
  <div>
    <p>
      Backend-focused full-stack senior software developer currently working at{" "}
      <TextLink href={"https://www.softwire.com"}>Softwire</TextLink>.
    </p>
    <p>
      Previously studied and practiced architecture at world-leading
      universities and firms, specialising in machine learning and computational
      complex geometry.
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="grid place-items-center min-h-dvh px-5 sm:px-10">
      <div className="grid gap-y-6 max-w-sm">
        <HeaderInfo />
        <About />
      </div>
    </div>
  );
}
