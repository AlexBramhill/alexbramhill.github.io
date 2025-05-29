"use client";
import { Github } from "@/app/svg/github";
import { NavLink } from "./nav-link";
import { LinkedIn } from "@/app/svg/linkedin";
import { useState } from "react";
import { TextLink } from "./text-link";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const websiteTitle = expanded ? "Alex Bramhill" : "ab";

  return (
    <div className={`w-full max-w-4xl  mx-auto mt-4`}>
      <header className="flex items-center justify-between mb-4">
        <div className="flex space-x-4 items-center">
          <h1 className="text-xl font-bold pb-1">
            <NavLink
              href={"/"}
              options={{
                classNameOverrides:
                  "font-bold after:hover:opacity-0 border-2 p-1 hover:border-spot rounded-full",
              }}
            >
              <span
                className={`transition-all duration-500 ease-in-out ${
                  expanded ? "text-3xl px-1" : "text-xl"
                }`}
              >
                {websiteTitle}
              </span>
            </NavLink>
          </h1>
          <button onClick={() => setExpanded(!expanded)} className="h-7 px-2 ">
            {expanded ? "about" : "about"}
          </button>
          <NavLink href={"/blog"}>blog</NavLink>
        </div>
        <nav className="flex space-x-4 items-center">
          <div>
            <a href="https://github.com/alexbramhill/">
              <Github className="h-7 w-7" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bramhill/">
              <LinkedIn className="h-7 w-7" />
            </a>
          </div>
        </nav>
      </header>
      <div
        className={`transition-[max-height]  duration-500 ease-in-out overflow-hidden  ${
          expanded ? "max-h-96" : "max-h-0 "
        }`}
      >
        <div className=" pb-6 max-w-96 rounded shadow-lg ">
          <p>
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
};
