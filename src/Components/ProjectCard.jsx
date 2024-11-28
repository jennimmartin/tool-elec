const ProjectCard = ({ img, title, text, cta }) => {
  return (
    <article className="rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        className="h-50 w-50"
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="p-8">
        <h2 className="text-zinc-100 text-xl tracking-wide font-medium">
          {title}
        </h2>
        <p className="mt-4 text-zinc-100 font-light leading-loose">{text}</p>
        <p className="mt-4 text-zinc-100 font-light leading-loose">{cta}</p>
      </div>
    </article>
  );
};
export default ProjectCard;
