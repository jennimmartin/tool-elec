import { FrTrust } from "../data";

import { TrustCard } from "./TrustCard";

const Trust = () => {
  return (
    <section className="align-element pb-20">
      <div>
        <p className=" text-zinc-200 text-center">Nous avons la confiance de</p>
      </div>
      <div className="py-16 grid gap-8 md:grid-cols-3">
        {FrTrust.map((trust) => {
          return <TrustCard key={trust.id} {...trust} />;
        })}
      </div>
    </section>
  );
};
export default Trust;
