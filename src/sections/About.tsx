import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section id="about" className="py-20">
        <SectionTitle title="About Me" />

        <p className="max-w-2xl mx-auto text-center text-gray-300">
          I am a Frontend Engineer specializing in React and TypeScript, focused
          on building scalable and high-performance web applications.
        </p>
      </section>
    </motion.div>
  );
};

export default About;
