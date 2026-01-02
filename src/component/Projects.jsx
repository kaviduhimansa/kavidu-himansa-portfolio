import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Make sure these paths match your files!
import dailyTaskImg from '../assets/pexels-jakubzerdzicki-33266833.jpg';
import carRentalImage from '../assets/man-with-sales-woman-car-showroom.jpg'; 
import busTrackingImg from '../assets/bus-tracking.png';

const Projects = () => {
  const myProjects = [
    {
      title: 'DailyTask App',
      description: 'A robust task management application built to streamline daily productivity. Features include task creation, categorization, and status tracking.',
      technologies: ['PHP', 'Laravel', 'SQL', 'Bootstrap'],
      image: dailyTaskImg, 
      githubLink: 'https://github.com/Bsit231032/DailyTaskApp'
    },
    {
      title: "Car Rental Service Site",
      description: "A complete car rental service website created using HTML, CSS, and PHP. It allows users to book and manage car reservations.",
      technologies: ["HTML", "CSS", "PHP"],
      image: carRentalImage, 
      githubLink: "https://github.com/Bsit231032/IsuruCarService"
    },
    {
      title: "Bus Tracking System",
      description: "A real-time bus tracking system that allows users to view bus locations, schedules, and estimated arrival times using GPS integration.",
      technologies: ["PHP", "Laravel", "MySQL", "Google Maps API"],
      image: busTrackingImg, 
      githubLink: "https://github.com/Bsit231032/Bus-Tracking-System"
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* CLEAN HEADING */}
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">MY</span>
          {' '}
          <span className="text-amber-300">PROJECTS</span>
        </motion.h2>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group"
              
              // Animation: Fade up one by one
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              
              // Hover Effect: Scale up slightly
              whileHover={{ y: -10, borderColor: '#fcd34d' }} // Amber border on hover
            >
              {/* IMAGE WRAPPER */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-amber-300 font-bold border border-amber-300 px-4 py-2 rounded-full">View Code</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-semibold text-sm"
                >
                  <FaGithub className="mr-2 text-lg" />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;