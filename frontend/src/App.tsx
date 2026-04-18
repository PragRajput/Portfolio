import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Hero } from '@/pages/Hero';
import { About } from '@/pages/About';
import { Skills } from '@/pages/Skills';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large floating orb 1 */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-full blur-3xl"
        />

        {/* Large floating orb 2 */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-600/10 via-primary/10 to-transparent rounded-full blur-3xl"
        />

        {/* Medium floating orb 3 */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -150, 0],
            y: [0, 150, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/8 via-primary/8 to-transparent rounded-full blur-3xl"
        />

        {/* Small floating particles */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [15, -15, 15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [-30, 30, -30],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/3 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl"
        />
      </div>

      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
