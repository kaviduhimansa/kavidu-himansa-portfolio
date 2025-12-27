import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 text-white py-16 px-4 md:px-16 rounded-xl mt-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span className="text-white">SAY</span>
          {' '}
          <span className="text-amber-300">HELLO</span>
        </h2>

        {/* CONTACT CARD */}
        {/* Changed 'p-8' to 'p-6 md:p-8' for better mobile spacing */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 flex flex-col items-center md:items-stretch">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            
            {/* GitHub */}
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-amber-300 transition-colors duration-300">
                <FaGithub size={24} className="text-gray-300 group-hover:text-black" />
              </div>
              <a href="https://github.com/Bsit231032" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium text-sm md:text-base">
                GITHUB
              </a>
            </div>

            {/* Facebook */}
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-amber-300 transition-colors duration-300">
                <FaFacebook size={24} className="text-gray-300 group-hover:text-black" />
              </div>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium text-sm md:text-base">
                FACEBOOK
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-amber-300 transition-colors duration-300">
                <FaLinkedin size={24} className="text-gray-300 group-hover:text-black" />
              </div>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium text-sm md:text-base">
                LINKEDIN
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-amber-300 transition-colors duration-300">
                <FaWhatsapp size={24} className="text-gray-300 group-hover:text-black" />
              </div>
              <a href="https://wa.me/940767379205" target="_blank" rel="noopener noreferrer" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium text-sm md:text-base">
                WHATSAPP: 076 737 9205
              </a>
            </div>

            {/* Email - Fixed Wrapping */}
            <div className="flex items-center space-x-4 group md:col-span-2">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-amber-300 transition-colors duration-300 shrink-0">
                <FaEnvelope size={24} className="text-gray-300 group-hover:text-black" />
              </div>
              <a href="mailto:kawwahimansa@gmail.com" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium text-sm md:text-base break-all text-left">
                kawwahimansa@gmail.com
              </a>
            </div>

            {/* Mobile */}
            <div className="flex items-center space-x-4 group md:col-span-2">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-amber-300 transition-colors duration-300 shrink-0">
                <FaMobileAlt size={24} className="text-gray-300 group-hover:text-black" />
              </div>
              <a href="tel:+940767379205" className="text-gray-300 group-hover:text-amber-300 transition-colors font-medium text-sm md:text-base text-left">
                MOBILE: 076 737 9205
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;