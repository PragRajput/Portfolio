import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          Hi, I'm a<br />
          <span className="text-primary">Full-Stack</span> Dev
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm font-medium"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Open to Work
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 min-h-[32px]"
        >
          <TypeAnimation
            sequence={[
              'Crafting clean full-stack web experiences',
              2000,
              'Specialized in React & TypeScript frontends',
              2000,
              'Building scalable Node.js & Express backends',
              2000,
              'Integrating APIs with 2-way CRM synchronization',
              2000,
              'Implementing webhooks and real-time event systems',
              2000,
              'Deploying on Azure, GCP, Firebase and Vercel',
              2000,
            ]}
            wrapper="span"
            speed={60}
            deletionSpeed={75}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary/90 transition-colors text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-md font-medium text-sm hover:bg-secondary transition-colors text-center"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
