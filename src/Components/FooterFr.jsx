import heroImg from "../assets/hero.svg";

const FooterFr = () => {
  return (
    <section className="tracking-wide">
      <div className="align-element grid md:grid-cols-2 pb-3">
        <article className="">
          <p className="text-2xl font-bold text-zinc-50">
            Tool<span className="text-zinc-500">Elec</span>
          </p>
          <p className="text-[#2631F3] font-bold">
            Votre électricien de confiance en Tarentaise
          </p>
          <p className="text-zinc-200 grid font-thin">
            Disponible 24 heures sur 24, 7 jours sur 7.
          </p>
        </article>
        <div className="text-zinc-200 font-thin grid place-items-end">
          <p>Thomas Gehin</p>
          <p>0.5 carlene 73210 la plagne tarentaise</p>
          <p>06 16 24 78 24</p>
        </div>
      </div>

      <h5 className="text-center pt-6 font-thin text-zinc-500">
        <span className="font-bold">Mentions légales </span> | &copy;{" "}
        {new Date().getFullYear()}
        <span> | créé par jennimmartin</span>
      </h5>
      <div className="border-b border-red-500 pb-2 "></div>
    </section>
  );
};
export default FooterFr;
