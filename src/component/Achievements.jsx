import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const certifications = [
    {
      institution: "IBM & Cognitive Class",
      certificates: [
        { name: "Python 101 for Data Science", link: "https://courses.cognitiveclass.ai/certificates/b2856bfd3f614e20b7811f188f26aa33" },
      ]
    },
  ];

  return (
    <section id="achievements" className="bg-slate-950 text-white py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">MY</span>
          {' '}
          <span className="text-amber-300">ACHIEVEMENTS</span>
        </motion.h2>

        <motion.div 
          className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I have successfully enhanced my skills and knowledge through various certifications, showcasing my commitment to continuous learning and professional growth:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-300 pl-3">
                  {item.institution}
                </h3>
                <ul className="space-y-4">
                  {item.certificates.map((cert, certIndex) => (
                    <li key={certIndex} className="flex justify-between items-center group border-b border-gray-800 pb-2">
                      <span className="text-gray-400 group-hover:text-white transition-colors">{cert.name}</span>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full hover:bg-amber-400 hover:text-black transition-all"
                      >
                        VIEW
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;