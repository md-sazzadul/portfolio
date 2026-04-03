import SectionTitle from '../components/SectionTitle';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <SectionTitle title="Skills" />

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="font-bold mb-2">Frontend</h3>
          <p>React, TypeScript, Tailwind</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="font-bold mb-2">Tools</h3>
          <p>Git, Vite, Figma</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="font-bold mb-2">Concepts</h3>
          <p>Responsive Design, Performance</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
