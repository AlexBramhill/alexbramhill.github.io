import Link from "next/link";
import { NavLink } from "./nav-link";

export const Header = () => (
  <header className="p-2 grid">
    <h1 className="text-spot text-xl font-bold p-2">
      <NavLink href={"/"} options={{ classNameOverrides: "font-bold" }}>
        Bramhill
      </NavLink>
    </h1>
    <hr className="w-svw bg-foreground h-0.5 mx-auto" />
  </header>
);
