import PropTypes from "prop-types";

export const TrustCard = ({ img, title }) => {
  return (
    <article>
      <span className="align-element grid justify-center object-cover items-center ">
        <img src={img} alt={title} className="h-20 w-20 rounded" />
      </span>
    </article>
  );
};

TrustCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
