import { motion } from 'framer-motion';
import type { Project } from '../types/project';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="card group h-full flex flex-col overflow-hidden"
    >
      {/* Preview area */}
      <div className="h-44 bg-linear-to-br from-blue-900/40 via-slate-800 to-indigo-900/30 relative overflow-hidden shrink-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 preview-grid opacity-20" />
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-600/20 blur-xl" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/90 text-white px-2.5 py-1 rounded-full">
            Live
          </span>
        </div>

        {/* Arrow link */}
        <a
          href={project.live}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          ↗
        </a>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Impact row */}
        <div className="text-xs text-slate-500 bg-slate-800/60 rounded-lg px-3 py-2 mb-4 border border-slate-700/50">
          <span className="text-blue-400 font-semibold">Impact: </span>
          {project.impact}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold tracking-wide uppercase bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700/60"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/60">
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>↗</span> Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors"
          >
            <span>⌥</span> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
