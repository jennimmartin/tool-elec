import ProjectCard from "./ProjectCard";
import { FrProjects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-32 align-element" id="projects">
      <SectionTitle text="Nos Spécialités" />
      <div className="py-16 grid lg:grid-cols-2 gap-8">
        {FrProjects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
