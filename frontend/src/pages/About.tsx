import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden group"
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
                loading="eager"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                I'm a full-stack developer with a passion for creating elegant solutions
                to complex problems. With expertise in modern web technologies, I build
                responsive and user-friendly applications that deliver real business value.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                I've worked with clients across the globe, communicating technical concepts
                clearly and delivering high-quality projects on time. My hands-on approach
                to product development means I don't just write code I solve real problems
                and create solutions that make a difference.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
