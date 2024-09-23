const ProjectCard = ({ img, title, text, cta }) => {
  return (
    <article className="rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64 "
      />
      <div className="p-8">
        <h2 className="text-zinc-50 text-xl tracking-wide font-medium">
          {title}
        </h2>
        <p className="mt-4 text-zinc-50 leading-loose">{text}</p>
        <p className="mt-4 text-zinc-50 leading-loose">{cta}</p>
      </div>
    </article>
  );
};
export default ProjectCard;
