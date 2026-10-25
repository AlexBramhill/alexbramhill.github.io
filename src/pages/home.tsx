import { CenteredLayout } from "@/layouts/centered-layout.tsx";
import { Github } from "@/components/icons/github.tsx";
import { LinkedIn } from "@/components/icons/linkedin.tsx";
import { TextLink } from "@/ui/text-link.tsx";

const HeaderInfo = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <h1>
      Alex <br />
      Bramhill
    </h1>
    <div className="grid gap-x-3 mb-2 grid-cols-[auto_auto]">
      <a href="https://github.com/alexbramhill/" aria-label="GitHub">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/bramhill/" aria-label="LinkedIn">
        <LinkedIn />
      </a>
    </div>
  </div>
);

const About = () => (
  <div>
    <p>
      Full stack tech lead at{" "}
      <TextLink href="https://www.softwire.com">Softwire</TextLink>, working in
      the financial and public sectors.
    </p>
    <p>
      Studied architecture at{" "}
      <TextLink href="https://www.ucl.ac.uk/bartlett/architecture">
        The Bartlett
      </TextLink>{" "}
      and practised at{" "}
      <TextLink href="https://www.fosterandpartners.com">
        Foster + Partners
      </TextLink>{" "}
      and <TextLink href="https://dkfs.io">DKFS</TextLink>, specialising in
      machine learning and computational geometry.
    </p>
  </div>
);

export function Home() {
  return (
    <CenteredLayout>
      <HeaderInfo />
      <About />
    </CenteredLayout>
  );
}
