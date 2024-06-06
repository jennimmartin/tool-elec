const Footer = () => {
  return (
    <section className="ext-5-xl tracking-wide text-zinc-50 text-center">
      <h5>
        <span className="font-bold">The Legal bits | </span> &copy;{" "}
        {new Date().getFullYear()}
        <span> | created by jennimmartin</span>
      </h5>
      <div className="border-b border-red-500 pb-1 "></div>
    </section>
  );
};
export default Footer;
