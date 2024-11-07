import heroImg from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className="px-20 h-dvh" id="home">
      <article className="hidden md:grid bg-top justify-center items-center">
        <img src={heroImg} alt="Tool Elec Logo" className="h-80 lg:h-96" />
      </article>
      <article>
        <h2 className=" align-element text-[#2631F3] font-semibold text-3xl md:text-5xl pt-8 tracking-wider mx-auto grid max-w-7xl px-8 text-center ">
          The Answer to Your Electrical Needs
        </h2>
        <h3 className="align-element text-zinc-100 text-2xl font-thin pt-4 tmd:text-3xl tracking-wider mx-auto grid max-w-5xl px-8 text-center">
          Your responsive, reliable team of Tarentaise based Electricans offer
          efficient support when you need it.
        </h3>
      </article>
    </div>
  );
};
export default Hero;
