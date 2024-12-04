import ProjectCard from "../ProjectCard";
import { projects } from "../../dataEn";
import SectionTitle from "../SectionTitle";

const ProjectsEn = () => {
  return (
    <section className="align-element py-32" id="projects">
      <SectionTitle text="Your Project" />
      <div className="py-16 grid lg:grid-cols-2 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default ProjectsEn;
