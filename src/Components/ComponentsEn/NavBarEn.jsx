import { links } from "../../dataEn";
import { Link } from "react-router-dom";

const NavbarUk = () => {
  return (
    <nav className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold text-zinc-50">
          Tool<span className="text-zinc-500">Elec</span>
        </h2>
        <div className="flex gap-x-3 text-zinc-600">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-zinc-50 duration-300"
              >
                {text}
              </a>
            );
          })}
          <Link to="/" className="text-white">
            Français
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavbarUk;
