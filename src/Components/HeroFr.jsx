import heroImg from "../Images/hero.svg";
import Button from "./Button";
import TrustFr from "./TrustFr";

const Hero = () => {
  return (
    <div className="align-element min-h-screen py-24" id="home">
      <article className="hidden md:grid justify-center">
        <img src={heroImg} alt="Tool Elec Logo" className="h-80 lg:h-96" />
      </article>
      <article>
        <h2 className="text-[#2631F3] font-semibold text-3xl md:text-5xl pt-8 tracking-wider mx-auto grid px-8 text-center ">
          La solution à vos besoins électriques en Tarentaise
        </h2>
        <h3 className="text-zinc-200 text-2xl font-thin pt-4 tmd:text-3xl tracking-wider mx-auto grid max-w-5xl px-8 text-center">
          Votre équipe d’électriciens réactifs et fiables en Tarentaise —
          disponibles quand vous en avez besoin.
        </h3>
      </article>
      <div className="grid justify-center py-10 ">
        <Button />
      </div>
    </div>
  );
};
export default Hero;
