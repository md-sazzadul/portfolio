import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Figma', level: 78 },
      { name: 'CI/CD', level: 72 },
    ],
  },
  {
    category: 'Concepts',
    icon: '🧠',
    skills: [
      { name: 'Accessibility', level: 88 },
      { name: 'Performance', level: 85 },
      { name: 'Testing', level: 80 },
      { name: 'System Design', level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <SectionTitle label="Expertise" title="Skills" />

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {skillGroups.map(({ category, icon, skills }, gi) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{icon}</span>
              <h3 className="font-bold text-white tracking-tight">
                {category}
              </h3>
            </div>

            <div className="space-y-4">
              {skills.map(({ name, level }, si) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300">{name}</span>
                    <span className="text-slate-500 tabular-nums">
                      {level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: si * 0.08,
                        ease: 'easeOut',
                      }}
                      className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
