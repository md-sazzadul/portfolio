import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <SectionTitle label="Get in Touch" title="Contact" />

      <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to connect — my inbox is always open.
          </p>
          <div className="space-y-4">
            {[
              { icon: '✉️', label: 'Email', value: 'hello@yourname.dev' },
              {
                icon: '🔗',
                label: 'LinkedIn',
                value: 'linkedin.com/in/yourname',
              },
              { icon: '🐙', label: 'GitHub', value: 'github.com/yourname' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    {label}
                  </div>
                  <div className="text-slate-300 text-sm font-medium">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full text-center">
            Send Message →
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
