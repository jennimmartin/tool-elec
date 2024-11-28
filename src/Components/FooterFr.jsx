import heroImg from "../assets/hero.svg";

const FooterFr = () => {
  return (
    <section className="tracking-wide text-zinc-50">
      <div className="align-element grid md:grid-cols-2 pb-20 items-baseline">
        <article className="md:grid-cols-3">
          <img
            src={heroImg}
            alt="Tool Elec Logo"
            className="h-36 lg:h-36 pb-4"
          />
          <p className="text-[#2631F3] font-light">
            Your trusted Electrican in the Tarentaise
          </p>
          <p className="text-zinc-100 font-thin">Available 24/7</p>
        </article>
        <div className="text-zinc-100 font-thin">
          <p>0.5 carlene 73210 la plagne tarentaise</p>
          <p>06 16 24 78 24</p>
        </div>
      </div>

      <h5 className="text-center">
        <span className="font-bold">Mentions légales | </span> &copy;{" "}
        {new Date().getFullYear()}
        <span> | créé par jennimmartin</span>
      </h5>
      <div className="border-b border-red-500 pb-2 "></div>
    </section>
  );
};
export default FooterFr;
