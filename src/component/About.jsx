import React from 'react';
import { motion } from 'framer-motion';
// Update this path if your CV file name is different
import myCV from '../assets/kavidu.pdf'; 

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-white py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* CLEAN HEADING (No Scramble) */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-10"
        >
          <span className="text-white">ABOUT</span>
          {' '}
          <span className="text-amber-300">ME</span>
        </motion.h2>
        
        {/* CONTENT */}
        <motion.div 
          className="text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hi, I'm Kavindu, a passionate and dedicated web developer from Sri Lanka. I'm currently a 23-year-old IT student pursuing a BSc(Hons) in IT degree at BCI Campus. I have a strong foundation in modern web technologies and a great passion for creating dynamic and responsive user interfaces.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm always eager to learn new technologies and thrive on solving complex problems. My goal is to leverage my skills to build innovative and user-friendly web applications that make a real impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Whether I'm coding a new solution, organizing a technical session, or collaborating on a club project, my mission is clear: to grow with purpose and empower others through technology and teamwork. I'm currently seeking internship opportunities to contribute to impactful projects.
          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href={myCV}            
            download="Kavindu_CV.pdf"
            target="_blank"        
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;