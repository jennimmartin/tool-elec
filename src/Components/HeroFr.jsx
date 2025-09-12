import heroImg from "../Images/hero.jpg";
import Button from "./Button";
import TrustFr from "./TrustFr";

const Hero = () => {
  return (
    <div
      className="align-element min-h-screen flex flex-col items-center justify-center py-24 "
      id="home"
    >
      <div className="w-full flex justify-center">
        <img
          src={heroImg}
          alt="Tool Elec Logo"
          className="h-48 md:h-2/3 w-auto object-cover"
        />
      </div>

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
