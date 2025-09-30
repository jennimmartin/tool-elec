import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <div>
      <h2 className="align-element text-2xl font-medium tracking-wider text-zinc-100 text-center capitalize">
        {text}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};
export default SectionTitle;
