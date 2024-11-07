import heroImg from "../assets/hero.svg";
import Button from "./Button";
import TrustFr from "./TrustFr";

const Hero = () => {
  return (
    <div className="px-20 h-dvh" id="home">
      <article className="hidden md:grid bg-top justify-center items-center">
        <img src={heroImg} alt="Tool Elec Logo" className="h-80 lg:h-96" />
      </article>
      <article>
        <h2 className="align-element text-[#2631F3] font-semibold text-3xl md:text-5xl pt-8 tracking-wider mx-auto grid max-w-7xl px-8 text-center ">
          En Tarentaise, la solution à vos besoins électriques
        </h2>
        <h3 className="align-element text-zinc-100 text-2xl font-thin pt-4 tmd:text-3xl tracking-wider mx-auto grid max-w-5xl px-8 text-center">
          Une équipe d'électricien efficace et réactive qui vous offre une
          response rapide quand vous en avex besoin
        </h3>
      </article>
      <div className="grid place-content-center md:place-content-end m-w-7xl pt-10 md:pr-20">
        <Button />
      </div>
      <div>
        <TrustFr />
      </div>
    </div>
  );
};
export default Hero;
