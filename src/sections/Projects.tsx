import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section id="projects" className="py-20">
        <SectionTitle title="Projects" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div key={project.title} whileHover={{ scale: 1.03 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
