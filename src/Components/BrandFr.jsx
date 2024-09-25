import { FrBrand } from "../data";
import SectionTitle from "./SectionTitle";
import { TrustCard } from "./TrustCard";

const Brand = () => {
  return (
    <section className="py-20 align-center">
      <SectionTitle text="Collaborer avec les meilleurs marques " />
      <div className="py-16 grid gap-8 md:grid-col-2 lg: grid-cols-3">
        {FrBrand.map((brand) => {
          return <TrustCard key={brand.id} {...brand} />;
        })}
      </div>
    </section>
  );
};
export default Brand;
