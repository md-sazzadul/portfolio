import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-10 w-full">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Your Name
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            Frontend Engineer specializing in React & TypeScript.
          </p>

          <div className="flex gap-4">
            <Button>View Projects</Button>
            <Button>Contact Me</Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 bg-slate-800 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
