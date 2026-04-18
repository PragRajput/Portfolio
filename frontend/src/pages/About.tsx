import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Building things that matter
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-square rounded-lg overflow-hidden border border-border"
          >
            <img
              src="/profile.jpg"
              alt="Prag"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a full-stack developer focused on building products that solve real problems.
              With expertise in modern web technologies, I create responsive, performant
              applications that deliver measurable business value.
            </p>
            <p>
              I've collaborated with clients globally — translating complex requirements
              into clean, maintainable systems. My hands-on approach means I take ownership
              from architecture through deployment.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-4">
              {[
                { label: 'Focus', value: 'Full-Stack' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Location', value: 'Remote' },
                { label: 'Status', value: 'Open to work' },
              ].map((item) => (
                <div key={item.label} className="border border-border rounded-md p-4">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium text-foreground text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
