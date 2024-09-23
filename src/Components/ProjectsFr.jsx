import ProjectCard from "./ProjectCard";
import { FrProjects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 align-center" id="projects">
      <SectionTitle text="Your Project" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {FrProjects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
