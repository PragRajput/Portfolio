import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          >
            Prag
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-3xl mx-auto min-h-[140px] flex items-center justify-center relative"
        >
          {/* Animated gradient background for typing text */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10 rounded-2xl blur-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 px-6 py-4">
            <TypeAnimation
              sequence={[
                'A passionate full-stack developer crafting beautiful web experiences ✨',
                2000,
                'Specialized in Frontend development with React & TypeScript 🚀',
                2000,
                'Expert in Backend systems with Node.js & Express ⚡',
                2000,
                'Built production-ready applications from scratch 🎯',
                2000,
                'Integrated APIs with 2-way data syncing between CRMs 🔄',
                2000,
                'Implemented webhooks for real-time event handling 📡',
                2000,
                'Developed scheduled jobs and automated workflows ⚙️',
                2000,
                'Passionate about clean code and scalable architecture 💡',
                2000,
              ]}
              wrapper="span"
              speed={60}
              deletionSpeed={70}
              repeat={Infinity}
              cursor={true}
              className="text-xl md:text-2xl font-medium text-foreground inline-block"
              style={{
                display: 'inline-block',
                minHeight: '80px',
              }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
