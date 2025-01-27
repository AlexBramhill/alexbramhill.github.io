import { TextLink } from "@/_components/text-link";
import { isExternal } from "util/types";

export default function TestPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-lg font-bold">About me</h1>
      I'm a backend-focused full-stack senior software developer currently
      working at{" "}
      <TextLink href="https://www.softwire.com/" options={{ isExternal: true }}>
        Softwire
      </TextLink>
      .
      <p />
      Prior to this, I spent 10 years studying and practicing architecture at
      world-leading universities and practices, where I specialised in machine
      learning and computational complex geometry.
      <p />
      Connect with me on{" "}
      <TextLink
        href="https://www.linkedin.com/in/bramhill/"
        options={{ isExternal: true }}
      >
        LinkedIn
      </TextLink>
      , or check out my <TextLink href="/blog">blog</TextLink>.
    </div>
  );
}
