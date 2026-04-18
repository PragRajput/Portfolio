import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/pages/Hero';
import { About } from '@/pages/About';
import { Skills } from '@/pages/Skills';
import { Experience } from '@/pages/Experience';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
