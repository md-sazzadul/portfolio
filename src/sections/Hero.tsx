import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      {/* Accent orb */}
      <div className="absolute top-1/3 right-0 w-130 h-130 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[320px] h-80 rounded-full bg-indigo-800/10 blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid md:grid-cols-2 gap-16 w-full items-center"
      >
        {/* Left */}
        <div>
          <motion.div variants={item} className="mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 border border-blue-800 bg-blue-950/50 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6"
          >
            Frontend
            <br />
            <span className="text-gradient">Engineer</span>
            <br />
            &amp; Builder
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-slate-400 leading-relaxed mb-8 max-w-md"
          >
            I craft fast, accessible, and pixel-perfect interfaces using React
            &amp; TypeScript — turning complex problems into elegant products.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex items-center gap-8">
            {[
              ['5+', 'Years Exp.'],
              ['30+', 'Projects'],
              ['15+', 'Clients'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-black text-white">{num}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — avatar card */}
        <motion.div variants={item} className="flex justify-center">
          <div className="relative">
            {/* Card */}
            <div className="w-72 h-80 rounded-3xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/60 shadow-2xl flex flex-col items-center justify-center gap-4 overflow-hidden">
              <div className="w-28 h-28 rounded-full bg-linear-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-5xl font-black text-white shadow-lg">
                YN
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-lg">Your Name</div>
                <div className="text-slate-400 text-sm mt-1">
                  Frontend Engineer
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                {['React', 'TypeScript', 'Tailwind'].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold tracking-wide uppercase bg-slate-700/80 text-slate-300 px-2.5 py-1 rounded-full border border-slate-600/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              Open to work
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg"
            >
              📍 Based in Your City
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
