export const TrustCard = ({ img, title }) => {
  return (
    <article>
      <span className="">
        <img src={img} alt={title} />
      </span>
    </article>
  );
};
