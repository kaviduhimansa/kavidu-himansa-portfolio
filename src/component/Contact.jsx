import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 text-white py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* HEADING */}
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">SAY</span>
          {' '}
          <span className="text-amber-300">HELLO</span>
        </motion.h2>

        {/* CONTACT CARD */}
        <motion.div 
          className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
            
            {/* Social Links */}
            {[
              { icon: FaGithub, label: "GitHub", link: "https://github.com/Bsit231032" },
              { icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/kavidu-himansa-0bb6802a6/" },
              { icon: FaFacebook, label: "Facebook", link: "https://www.facebook.com/" },
              { icon: FaWhatsapp, label: "WhatsApp", link: "https://wa.me/940767379205" },
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-transparent hover:border-amber-300/30 group"
                
                // Button Animation
                whileHover={{ scale: 1.03, backgroundColor: "rgba(31, 41, 55, 1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-slate-950 rounded-full text-gray-400 group-hover:text-amber-300 transition-colors">
                  <item.icon size={24} />
                </div>
                <span className="text-gray-300 group-hover:text-white font-medium">{item.label}</span>
              </motion.a>
            ))}

            {/* Direct Contact Info (Email & Phone) */}
            <div className="md:col-span-2 space-y-4 mt-6 pt-8 border-t border-gray-800">
               <motion.div 
                 className="flex items-center justify-center space-x-3 text-gray-400 hover:text-amber-300 transition-colors"
                 whileHover={{ scale: 1.05 }}
               >
                  <FaEnvelope />
                  <a href="mailto:kawwahimansa@gmail.com" className="font-mono text-sm md:text-base">kawwahimansa@gmail.com</a>
               </motion.div>
               
               <motion.div 
                 className="flex items-center justify-center space-x-3 text-gray-400 hover:text-amber-300 transition-colors"
                 whileHover={{ scale: 1.05 }}
               >
                  <FaMobileAlt />
                  <a href="tel:+940767379205" className="font-mono text-sm md:text-base">076 737 9205</a>
               </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;