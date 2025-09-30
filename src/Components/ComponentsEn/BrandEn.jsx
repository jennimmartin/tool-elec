import { brand } from "../../dataEn";

import { TrustCard } from "../TrustCard";

const Brand = () => {
  return (
    <section className=" align-element align-center">
      <div>
        <p className=" text-zinc-200 font-thin text-center">
          Working with the best brands
        </p>
      </div>
      <div className="py-16 grid gap-8 md:grid-cols-3">
        {brand.map((brand) => {
          return <TrustCard key={brand.id} {...brand} />;
        })}
      </div>
    </section>
  );
};
export default Brand;
