import { brand } from "../../dataEn";
import SectionTitle from "../SectionTitle";
import { TrustCard } from "../TrustCard";

const Brand = () => {
  return (
    <section className="py-20 align-center">
      <SectionTitle text="Working with the best brands " />
      <div className="py-16 grid gap-8 md:grid-col-2 lg: grid-cols-3">
        {brand.map((brand) => {
          return <TrustCard key={brand.id} {...brand} />;
        })}
      </div>
    </section>
  );
};
export default Brand;
