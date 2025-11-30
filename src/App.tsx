import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Activities />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
