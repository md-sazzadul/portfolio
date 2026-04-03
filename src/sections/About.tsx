import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20">
      <SectionTitle title="About Me" />

      <p className="max-w-2xl mx-auto text-center text-gray-300">
        I am a Frontend Engineer specializing in React and TypeScript, focused
        on building scalable and high-performance web applications.
      </p>
    </section>
  );
};

export default About;
