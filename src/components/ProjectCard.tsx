import type { Project } from '../types/project';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-slate-800 rounded-xl p-5">
      <div className="h-40 bg-slate-700 rounded mb-4" />

      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

      <p className="text-gray-300 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-sm bg-slate-700 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.live} className="text-indigo-400">
          Live
        </a>
        <a href={project.github} className="text-indigo-400">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
