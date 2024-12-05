import { FaFacebookSquare } from "react-icons/fa";

const FooterEn = () => {
  return (
    <section className="tracking-wide">
      <div className="align-element grid md:grid-cols-2 pb-3">
        <article className="">
          <p className="text-2xl font-bold text-zinc-50">
            Tool<span className="text-zinc-500">Elec</span>
          </p>
          <p className="text-[#2631F3] font-bold">
            Your trusted Electrican in the Tarentaise
          </p>
          <p className="text-zinc-200 grid font-thin pb-3">Available 24/7</p>
          <div>
            <a href="https://www.facebook.com/tool.elec">
              <FaFacebookSquare className="text-blue-700 h-6 w-6 hover:text-blue-400 duration-300" />
            </a>
          </div>
        </article>
        <div className="text-zinc-200 font-thin grid place-items-end">
          <p>Thomas Gehin</p>
          <p>0.5 carlene 73210 la plagne tarentaise</p>
          <p>06 16 24 78 24</p>
        </div>
      </div>

      <h5 className="text-center pt-6 font-thin text-zinc-500">
        <span className="font-bold">Legal bits </span> | &copy;{" "}
        {new Date().getFullYear()}
        <span> | Created by jennimmartin</span>
      </h5>
      <div className="border-b border-red-500 pb-2 "></div>
    </section>
  );
};

export default FooterEn;
