// src/App.jsx
import React from 'react';
import HeroSection from './component/HeroSection';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Achievements from './component/Achievements';
import Contact from './component/Contact';

function App() {
  return (
    <div className="bg-slate-950  text-white min-h-screen">
      <main>
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="about" className="py-16 min-h-screen">
          <About />
        </section>

        <section id="skills" className="py-16 min-h-screen">
          <Skills />
        </section>
        
        <section id="projects" className="py-16 min-h-screen">
          <Projects />
        </section>

        <section id="achievements" className="py-16 min-h-screen">
          <Achievements />
        </section>

        <section id="contact" className="py-16 min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
