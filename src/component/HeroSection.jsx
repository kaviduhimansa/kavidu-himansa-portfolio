import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaHome, FaUser, FaTools, FaCode, FaCertificate, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div id="home" className="bg-slate-950 text-white min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-12 lg:px-16 overflow-x-hidden">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      {/* 'hidden' ensures it is GONE on mobile */}
      {/* 'md:flex' ensures it appears on Laptop */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 md:p-4 z-50 hidden md:flex flex-col items-center space-y-6 md:space-y-8">
        
        <a href="#home" className="group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300">
          <FaHome size={24} className="text-gray-400 hover:text-yellow-400" />
          <span className="absolute right-full mr-4 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Home</span>
        </a>

        <a href="#about" className="group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300">
          <FaUser size={24} className="text-gray-400 hover:text-yellow-400" />
          <span className="absolute right-full mr-4 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">About</span>
        </a>

        <a href="#skills" className="group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300">
          <FaTools size={24} className="text-gray-400 hover:text-yellow-400" />
          <span className="absolute right-full mr-4 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Skills</span>
        </a>

        <a href="#projects" className="group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300">
          <FaCode size={24} className="text-gray-400 hover:text-yellow-400" />
          <span className="absolute right-full mr-4 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Projects</span>
        </a>

        <a href="#achievements" className="group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300">
          <FaCertificate size={24} className="text-gray-400 hover:text-yellow-400" />
          <span className="absolute right-full mr-4 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Achievements</span>
        </a>

        <a href="#contact" className="group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300">
          <FaEnvelope size={24} className="text-gray-400 hover:text-yellow-400" />
          <span className="absolute right-full mr-4 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Contact</span>
        </a>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 rounded-lg">
        
        {/* Text Section */}
        <div className="text-center md:text-left w-full">
          <p className="text-xs sm:text-sm text-cyan-400 mb-3 sm:mb-4 font-semibold tracking-wide">HELLO, I'M KAVINDU BANDARA</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            BSC HONS IT<br className="sm:hidden" /><span className="hidden sm:inline"> </span>(3rd Year at BCI Campus)
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I am a third-year BSc Hons IT undergraduate at BCI Campus, with a strong passion for software development, AI, and new technologies. I am actively seeking an opportunity to apply my knowledge and skills to real-world projects and gain professional experience in the industry.
          </p>
          
          <div className="flex justify-center md:justify-start mt-8 sm:mt-10">
            <a 
              href="#about" 
              className="relative bg-yellow-400 text-black py-3 px-6 sm:px-8 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-110 hover:shadow-yellow-400/50 active:scale-95"
            >
              More About Me
            </a>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8 mt-8 sm:mt-10">
            <a href="https://github.com/Bsit231032" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-125 duration-300 p-2">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kavidu-himansa-0bb6802a6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-125 duration-300 p-2">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;