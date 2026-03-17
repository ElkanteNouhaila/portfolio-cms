import type { Project } from "../types/project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={project.image} alt={project.title} className="rounded" />
      <h2 className="text-xl font-bold mt-2">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>

      <div className="flex gap-2 mt-3">
        <a href={project.github} className="text-blue-500">GitHub</a>
        <a href={project.demo} className="text-green-500">Live</a>
      </div>
    </div>
  );
};

export default ProjectCard;