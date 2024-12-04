const ProjectCard = ({ img, title, text, textb, cta }) => {
  return (
    <div className="px-8">
      <article className="">
        <img
          src={img}
          className="w-full object-cover rounded h-64"
          alt={title}
        />
        <div className="py-8">
          <h2 className="text-zinc-100 text-xl tracking-wide font-medium capitalize">
            {title}
          </h2>
          <p className="mt-4 text-zinc-200 font-light leading-loose">{text}</p>
          <p className="mt-4 text-zinc-200 font-light leading-loose">{textb}</p>
          <p className="mt-4 text-zinc-200 font-light leading-loose">{cta}</p>
        </div>
      </article>
    </div>
  );
};
export default ProjectCard;
