import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="px-20 h-dvh">
      <article className="hidden md:grid bg-top justify-center items-center">
        <img src={heroImg} alt="Tool Elec Logo" className="h-80 lg:h-96" />
      </article>
      <article>
        <h2 className="text-[#2631F3] font-semibold text-3xl md:text-5xl pt-8 tracking-wider mx-auto grid max-w-7xl px-8 text-center ">
          En Tarentaise, la solution à vos besoins électriques
        </h2>
        <h3 className="text-zinc-100 text-2xl font-thin pt-4 tmd:text-3xl tracking-wider mx-auto grid max-w-5xl px-8 text-center">
          Une équipe d'électricien efficace et réactive qui vous offre une
          response rapide quand vous en avex besoin
        </h3>
      </article>
    </div>
  );
};
export default Hero;
