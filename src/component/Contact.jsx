import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 text-white py-16 px-4 md:px-16 rounded-xl mt-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* HEADING: Matches 'About Me' style (White + Amber) */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span className="text-white">SAY</span>
          {' '}
          <span className="text-amber-300">HELLO</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
          
          {/* GitHub */}
          <div className="flex items-center space-x-4 justify-center md:justify-start group">
            <FaGithub size={30} className="text-gray-300 group-hover:text-amber-300 transition-colors" />
            <a href="https://github.com/Bsit231032" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium">
              ON GITHUB
            </a>
          </div>

          {/* Facebook */}
          <div className="flex items-center space-x-4 justify-center md:justify-start group">
            <FaFacebook size={30} className="text-gray-300 group-hover:text-amber-300 transition-colors" />
            <a href="https://www.facebook.com/share/19ohPSbERt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium">
              ON FACEBOOK
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 justify-center md:justify-start group">
            <FaLinkedin size={30} className="text-gray-300 group-hover:text-amber-300 transition-colors" />
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium">
              ON LINKEDIN
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-4 justify-center md:justify-start group">
            <FaWhatsapp size={30} className="text-gray-300 group-hover:text-amber-300 transition-colors" />
            <a href="https://wa.me/940767379205" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium">
              ON WHATSAPP - 0767379205
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 justify-center md:justify-start group">
            <FaEnvelope size={30} className="text-gray-300 group-hover:text-amber-300 transition-colors" />
            <a href="mailto:kawwahimansa@gmail.com" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium">
              ON EMAIL - kawwahimansa@gmail.com
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-4 justify-center md:justify-start group">
            <FaMobileAlt size={30} className="text-gray-300 group-hover:text-amber-300 transition-colors" />
            <a href="tel:+940767379205" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium">
              ON MOBILE - 0767379205
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;