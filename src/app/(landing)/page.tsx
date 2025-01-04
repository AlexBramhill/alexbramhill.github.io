import Link from "next/link";
import { Github } from "../svg/github";
import { LinkedIn } from "../svg/linkedin";
import { TextLink } from "@/components/text-link";
import { NavLink } from "@/components/nav-link";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-dvh">
      <div className="grid gap-3 items-center justify-center max-w-xs">
        <h1 className="text-4xl font-bold">
          Alex <br />
          Bramhill
        </h1>
        <div
          className="grid grid-cols-[auto-auto-auto] grid-rows-[auto-auto-auto] gap-3 mx-fill 
         duration-500 animate-fade-in"
        >
          <hr className="col-span-2 w-full bg-foreground h-1" />
          <div className="col-span-2 text-center">
            <NavLink href={"/about"}>about</NavLink> | <span>blog</span>
          </div>
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
