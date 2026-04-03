import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const timeline = [
  { year: '2024', role: 'Senior Frontend Engineer', company: 'Company Inc.' },
  { year: '2022', role: 'Frontend Developer', company: 'Startup Co.' },
  { year: '2020', role: 'Junior Developer', company: 'Agency Ltd.' },
];

const About = () => {
  return (
    <section id="about" className="py-28">
      <SectionTitle label="About" title="Who I Am" />

      <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I'm a Frontend Engineer with a passion for crafting exceptional web
            experiences. I focus on performance, accessibility, and clean code —
            building interfaces that users love and developers enjoy
            maintaining.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            When I'm not building, I contribute to open source, write about
            frontend architecture, and mentor junior developers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          {timeline.map(({ year, role, company }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start group"
            >
              <div className="shrink-0 w-14 text-right">
                <span className="text-xs font-bold text-blue-400 tracking-wider">
                  {year}
                </span>
              </div>
              <div className="shrink-0 flex flex-col items-center pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-slate-700 mt-1 min-h-10" />
                )}
              </div>
              <div className="pb-4">
                <div className="font-semibold text-white">{role}</div>
                <div className="text-slate-500 text-sm mt-0.5">{company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
