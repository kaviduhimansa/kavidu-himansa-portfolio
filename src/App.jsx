import React, { useState, useEffect } from 'react';
import HeroSection from './component/HeroSection';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Achievements from './component/Achievements';
import Contact from './component/Contact';

function App() {
  // 1. STATE TO TRACK MOUSE POSITION
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 2. LISTEN FOR MOUSE MOVEMENTS
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    // Added 'relative' so the spotlight positions correctly relative to this div
    <div className="relative bg-slate-950 text-white min-h-screen overflow-hidden">
      
      {/* 3. THE SPOTLIGHT ELEMENT */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
        }}
      ></div>

      <main className="relative z-10">
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