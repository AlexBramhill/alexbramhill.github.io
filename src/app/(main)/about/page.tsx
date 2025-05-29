import React from "react";
import { TextLink } from "@/_components/text-link";
import { Github } from "@/app/svg/github";
import { LinkedIn } from "@/app/svg/linkedin";

const HeaderInfo = () => (
  <div className="grid grid-cols-[1fr,auto] gap-3 items-end">
    <h1 className="text-4xl font-bold">
      Alex <br />
      Bramhill
    </h1>
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
    <div className="grid place-items-center px-5 sm:px-10">
      <div className="grid gap-y-6 max-w-sm">
        <HeaderInfo />
        <About />
      </div>
    </div>
  );
}
