import { trust } from "../../dataEn";

import { TrustCard } from "../TrustCard";

const TrustEn = () => {
  return (
    <section className="align-element pb-20">
      <div>
        <p className=" text-zinc-200 text-center">We're trusted by</p>
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
