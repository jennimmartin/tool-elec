import contactImg from "../../Images/contact-photo.jpg";
import SectionTitle from "../SectionTitle";

const ContactEn = () => {
  return (
    <section
      className="align-element pb-20 align-center text-zinc-100 "
      id="contact"
    >
      <SectionTitle text="Contact" />
      <p className="text-center py-20">
        We are waiting for your call, and promise not to sleep on the job
      </p>
      <article>
        <img src={contactImg} alt="hard at work" className="h-30 py-10" />
      </article>
    </section>
  );
};
export default ContactEn;
