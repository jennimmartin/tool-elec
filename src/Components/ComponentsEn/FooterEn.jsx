import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";

const FooterEn = () => {
  return (
    <section className="tracking-wide">
      <div className="align-element grid md:grid-cols-2">
        <article className="">
          <p className="text-2xl font-bold text-zinc-50">
            Tool<span className="text-zinc-500">Elec</span>
          </p>
          <p className="text-[#2631F3] font-bold">
            Your trusted Electrican in the Tarentaise
          </p>
          <p className="text-zinc-200 grid font-thin">Available 24/7</p>
          <div>
            <a href="https://www.facebook.com/tool.elec">
              <FaFacebookSquare className="text-blue-700 h-6 w-6 hover:text-blue-400 duration-300" />
            </a>
          </div>
        </article>
        <div className="text-zinc-200 font-thin grid md:place-items-end">
          <p>0.5 Carlene, 73210, La Plagne, Tarentaise</p>
          <p>06.16.24.78.24.</p>
          <p>toolelec73@gmail.com</p>
        </div>
      </div>

      <h5 className="text-center pt-6 font-thin text-zinc-200">
        <span className="font-bold hover:text-zinc-500 duration-300">
          <Link to="/legal">Legal bits </Link>
        </span>
        | &copy; {new Date().getFullYear()}
        <span> | Created by jennimmartin</span>
      </h5>
      <div className="border-b border-red-500 pb-2 "></div>
    </section>
  );
};

export default FooterEn;
