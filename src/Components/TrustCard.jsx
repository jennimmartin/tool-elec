export const TrustCard = ({ img, title }) => {
  return (
    <article>
      <span className="text-zinc-50">
        <img src={img} alt={title} />
      </span>
    </article>
  );
};
