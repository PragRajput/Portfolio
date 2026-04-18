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
    <div className="min-h-screen bg-background">
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
  );
}

export default App;
