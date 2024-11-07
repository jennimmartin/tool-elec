export const TrustCard = ({ img, title }) => {
  return (
    <article>
      <span className="align-element grid justify-center items-center ">
        <img src={img} alt={title} className="h-20 w-20" />
      </span>
    </article>
  );
};
