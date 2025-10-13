import { trust } from "../../dataEn";

import { TrustCard } from "../TrustCard";

const TrustEn = () => {
  return (
    <section className="align-element">
      <div>
        <p className=" text-zinc-200 font-thin text-center">
          We&#39;re trusted by
        </p>
      </div>
      <div className="py-16 grid gap-8 md:grid-cols-3">
        {trust.map((trust) => {
          return <TrustCard key={trust.id} {...trust} />;
        })}
      </div>
    </section>
  );
};
export default TrustEn;
