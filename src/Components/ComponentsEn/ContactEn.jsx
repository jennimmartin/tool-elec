import contactImg from "../../Images/contact-photo.jpg";
import SectionTitle from "../SectionTitle";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactEn = () => {
  return (
    <section className="align-element py-32" id="contact">
      <SectionTitle text="Contact" />
      <p className="align-element max-w-[600px] font-thin text-center py-8 text-zinc-100">
        Our whole team live in the valley of the Tarentaise, year round. We
        understand the challenges of living and working in the mountains,
        alongside the ski industry.
      </p>
      <p className="align-element max-w-[600px] font-thin text-center text-zinc-200">
        Our quotes are free and we will never share your details to a third
        party.
      </p>

      <a href="mailto:toolelec73@gmail.com">
        <article className="grid justify-center">
          <img
            src={contactImg}
            alt="hard at work"
            className="h-64 w-64 object-cover"
          />
          <p className="text-center pt-0 font-thin text-zinc-200">Email us</p>
        </article>
      </a>
      <p className=" text-zinc-200 font-thin py-20 text-center ">
        Of course you can also call us now -
        <a href="tel:+33-6-16-24-78-25">
          <PiPhoneCallFill className="text-zinc-100 h-8 w-8 inline-grid cursor-pointer hover:text-yellow-200 duration-500" />
        </a>
      </p>
    </section>
  );
};
export default ContactEn;
