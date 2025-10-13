import heroImg from "../../Images/hero.jpg";
import Button from "../Button";

const Hero = () => {
  return (
    <div
      className="align-element h-[100dvh] flex flex-col items-center justify-center py-24 "
      id="home"
    >
      <div className="w-full flex justify-center">
        <img
          src={heroImg}
          alt="Tool Elec Logo"
          className="max-h-[60vh] w-auto object-contain"
        />
      </div>
      <article>
        <h2 className="text-[#2631F3] font-semibold text-3xl md:text-5xl pt-8 tracking-wider mx-auto grid px-8 text-center ">
          The Answer to Your Electrical Needs
        </h2>
        <h3 className="text-zinc-100 text-2xl font-thin pt-4 tmd:text-3xl tracking-wider mx-auto grid max-w-5xl px-8 text-center">
          Your responsive, reliable team of Tarentaise-based electricians —
          ready to help when you need it most.
        </h3>
      </article>
      <div className="grid justify-center py-10 ">
        <Button />
      </div>
    </div>
  );
};
export default Hero;
