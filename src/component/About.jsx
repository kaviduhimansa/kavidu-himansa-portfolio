import React from 'react';
// 1. IMPORT YOUR SPECIFIC CV FILE HERE
// Matches the filename 'kavidu.pdf' inside src/assets/
import myCV from '../assets/kavidu.pdf'; 

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-white py-16 px-4 md:px-16 rounded-xl">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          <span className="text-white">ABOUT</span>
          {' '}
          <span className="text-amber-300">ME</span>
        </h2>
        
        {/* CONTENT */}
        <div className="text-left">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hi, I'm Kavindu, a passionate and dedicated web developer from Sri Lanka. I'm currently a 23-year-old IT student pursuing a BSc(Hons) in IT degree at BCI Campus. I have a strong foundation in modern web technologies and a great passion for creating dynamic and responsive user interfaces.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm always eager to learn new technologies and thrive on solving complex problems. My goal is to leverage my skills to build innovative and user-friendly web applications that make a real impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Whether I'm coding a new solution, organizing a technical session, or collaborating on a club project, my mission is clear: to grow with purpose and empower others through technology and teamwork. I'm currently seeking internship opportunities to contribute to impactful projects.
          </p>
        </div>

        {/* --- DOWNLOAD CV BUTTON --- */}
        <div className="mt-8 flex justify-center">
          <a 
            href={myCV}            // Links to kavidu.pdf
            download="Kavindu_CV.pdf" // The name the file will have when downloaded
            target="_blank"        
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-amber-400/50"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;