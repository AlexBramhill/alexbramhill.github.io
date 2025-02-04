import { Github } from "@/app/svg/github";
import { NavLink } from "./nav-link";
import { LinkedIn } from "@/app/svg/linkedin";

export const Header = () => (
  <header className="w-full max-w-4xl pb-24 mx-auto mt-4 flex  items-center justify-between">
    <h1 className="text-xl font-bold pb-1">
      <NavLink
        href={"/"}
        options={{
          classNameOverrides:
            "font-bold after:hover:opacity-0 border-2 p-1 hover:border-spot rounded-full",
        }}
      >
        ab
      </NavLink>
    </h1>
    <nav className="flex space-x-4 items-center">
      <NavLink href={"/blog"}>Blog</NavLink>
      <NavLink href={"/about"}>About</NavLink>
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
);
