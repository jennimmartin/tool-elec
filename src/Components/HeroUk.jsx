import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="bg-zinc-950 py-24">
      <article className="hidden md:block">
        <img
          src={heroImg}
          alt="Tool Elec Logo"
          className="mx-auto h-80 lg:h-96 "
        />
      </article>
      <article>
        <h2 className="text-5xl tracking-wider text-[#2631F3] text-center">
          The Answer to Your Electrical Needs
        </h2>
        <h3 className="text-5-xl tracking-wide text-zinc-50 text-center">
          Your responsive, reliable team of Tarentaise based Electricans offer
          efficient support when you need it.
        </h3>
      </article>
    </div>
  );
};
export default Hero;
