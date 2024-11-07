import { FrTrust } from "../data";
import SectionTitle from "./SectionTitle";
import { TrustCard } from "./TrustCard";

const Trust = () => {
  return (
    <section className="pb-20 align-center text-zinc-200 text-center">
      <div>
        <p>Nous avons la confiance de</p>
      </div>
      <div className="py-16 grid gap-8 md:grid-col-2 lg: grid-cols-3">
        {FrTrust.map((trust) => {
          return <TrustCard key={trust.id} {...trust} />;
        })}
      </div>
    </section>
  );
};
export default Trust;
