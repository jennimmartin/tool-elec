import contactImg from "./../Images/contact-photo.jpg";
import SectionTitle from "./SectionTitle";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactFr = () => {
  return (
    <section className="align-element py-32" id="contact">
      <SectionTitle text="Contact" />
      <p className="align-element max-w-[600px] font-thin text-center py-8 text-zinc-100">
        Toute notre équipe vit dans la vallée de la Tarentaise, toute l'année.
        Nous comprenons les défis de la vie et du travail en montagne.
        comprenons les défis de la vie et du travail en montagne, aux côtés de
        l'industrie du ski.
      </p>
      <p className="align-element max-w-[600px] font-thin text-center text-zinc-200">
        Nos devis sont gratuits et nous ne communiquerons jamais vos coordonnées
        à un tiers. tiers.
      </p>

      <a href="mailto:toolelec73@gmail.com">
        <article className="grid justify-center">
          <img
            src={contactImg}
            alt="hard at work"
            className="h-64 w-64 object-cover"
          />
          <p className="text-center font-thin pt-0 text-zinc-200">
            Envoyez-nous un e-mail
          </p>
        </article>
      </a>
      <p className=" text-zinc-200 font-thin py-20 text-center ">
        Bien entendu, vous pouvez également nous appeler dès maintenant -
        <a href="tel:+33-6-16-24-78-25">
          <PiPhoneCallFill className="text-zinc-100 h-8 w-8 inline-grid cursor-pointer hover:text-green-500 duration-500" />
        </a>
      </p>
    </section>
  );
};
export default ContactFr;
