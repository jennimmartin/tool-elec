import contactImg from "./../Images/contact-photo.jpg";
import SectionTitle from "./SectionTitle";

const ContactFr = () => {
  return (
    <section className="align-element grid pt-32 text-zinc-100 " id="contact">
      <SectionTitle text="Contact" />
      <p className="align-element text-center py-20 text-zinc-100">
        We love to discuss all things electrical so get in contact with us via
        email and tell us about your new and exciting project or that issue
        you've not got around to fixing yet.
      </p>
      <a href="mailto:toolelec73@gmail.com">
        <article className="grid justify-center">
          <img
            src={contactImg}
            alt="hard at work"
            className="h-64 w-64 object-cover"
          />
        </article>
      </a>
      <p className=" text-zinc-100 py-20 text-center ">
        Of course you can also call us now if your issue just can't wait.
      </p>
      <a href="tel:+33-6-16-24-78-25">Phone link</a>
    </section>
  );
};
export default ContactFr;
