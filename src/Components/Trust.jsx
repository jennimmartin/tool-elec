import { trust } from "../data";
import SectionTitle from "./SectionTitle";
import { TrustCard } from "./TrustCard";

const Trust = () => {
  return (
    <section className="py-20 align-center">
      <SectionTitle text="We are trusted by" />
      <div className="py-16 grid gap-8 md:grid-col-2 lg: grid-cols-3">
        {trust.map((trust) => {
          return <TrustCard key={trust.id} {...trust} />;
        })}
      </div>
    </section>
  );
};
export default Trust;
