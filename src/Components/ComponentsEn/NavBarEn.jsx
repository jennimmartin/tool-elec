import { links } from "../../dataEn";
import { Link } from "react-router-dom";

const NavbarUk = () => {
  return (
    <nav className="sticky top-0 bg-black">
      <div className="align-element py-4 flex flex-col justify-evenly sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold text-zinc-50">
          Tool<span className="text-zinc-500">Elec</span>
        </h2>
        <div className="flex gap-x-3 space-x-3 text-zinc-100">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-zinc-500 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        <Link to="/" className="text-zinc-500 hover:text-zinc-50 duration-100">
          Français
        </Link>
      </div>
    </nav>
  );
};
export default NavbarUk;
