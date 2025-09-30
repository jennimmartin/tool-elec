import PropTypes from "prop-types";
import { PiPhoneCallFill } from "react-icons/pi";

const ProjectCard = ({ img, title, text, textb }) => {
  return (
    <div className="px-8 h-full">
      <article className="flex flex-col h-full">
        <img
          src={img}
          className="w-full object-cover rounded h-64"
          alt={title}
        />
        <div className="flex flex-col flex-grow py-8">
          <h2 className="text-zinc-100 text-xl tracking-wide font-medium capitalize">
            {title}
          </h2>
          <p className="mt-4 text-zinc-200 font-light leading-loose">{text}</p>
          <p className="mt-4 pb-4 text-zinc-200 font-light leading-loose">
            {textb}
          </p>
          <div className="mt-auto">
            <a
              href="tel:0616247824"
              className="inline-flex items-center bg-blue-600 text-zinc-100 px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              <PiPhoneCallFill className="mr-2" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  textb: PropTypes.string,
  cta: PropTypes.string,
};
export default ProjectCard;
