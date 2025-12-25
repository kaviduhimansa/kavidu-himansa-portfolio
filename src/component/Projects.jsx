import React from 'react';
import { FaGithub } from 'react-icons/fa';

// --- 1. IMPORTANT: FIXED IMAGE IMPORTS ---
// We use "../" to go UP one level from the 'component' folder to 'src',
// then into the 'assets' folder.
// React uses forward slashes (/), not backslashes (\).
import dailyTaskImg from '../assets/pexels-jakubzerdzicki-33266833.jpg';
import carRentalImage from '../assets/man-with-sales-woman-car-showroom.jpg'; 
import busTrackingImg from '../assets/bus-tracking.png';

const Projects = () => {
  
  // --- 2. IMPORTANT: DATA ARRAY ---
  // This list holds all the data for your projects. 
  // Instead of writing HTML for every single card, we store the info here.
  const myProjects = [
    {
      title: 'DailyTask App',
      description: 'A robust task management application built to streamline daily productivity. Features include task creation, categorization, and status tracking.',
      technologies: ['PHP', 'Laravel', 'SQL', 'Bootstrap'],
      image: dailyTaskImg, // We assign the imported image variable here
      link: 'https://github.com/Bsit231032/DailyTaskApp', 
      githubLink: 'https://github.com/Bsit231032/DailyTaskApp'
    },
    {
      title: "Car Rental Service Site",
      description: "A complete car rental service website created using HTML, CSS, and PHP. It allows users to book and manage car reservations.",
      technologies: ["HTML", "CSS", "PHP"],
      image: carRentalImage, 
      link: "https://github.com/Bsit231032/IsuruCarService",
      githubLink: "https://github.com/Bsit231032/IsuruCarService"
    },
    {
      title: "Bus Tracking System",
      description: "A real-time bus tracking system that allows users to view bus locations, schedules, and estimated arrival times using GPS integration.",
      // I assumed these technologies based on your other projects. You can change them!
      technologies: ["PHP", "Laravel", "MySQL", "Google Maps API"],
      image: busTrackingImg, 
      link: "https://github.com/Bsit231032/Bus-Tracking-System",
      githubLink: "https://github.com/Bsit231032/Bus-Tracking-System"
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-16 px-4 md:px-16 rounded-xl mt-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADING --- */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span className="text-white">MY</span>
          {' '}
          <span className="text-amber-300">PROJECTS</span>
        </h2>

        {/* --- 3. IMPORTANT: GRID LAYOUT --- */}
        {/* This div controls how many cards appear per row. */}
        {/* 'grid-cols-1' (Mobile), 'md:grid-cols-2' (Tablet), 'lg:grid-cols-3' (Laptop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* --- 4. IMPORTANT: THE MAP LOOP --- */}
          {/* We use .map() to loop through 'myProjects'. */}
          {/* It automatically creates one <div> card for every item in the list. */}
          {myProjects.map((project, index) => (
            <div 
              key={index} // React needs a unique key for every item in a list
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-800"
            >
              {/* --- DYNAMIC IMAGE --- */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} // Loads the image from the data above
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>

              {/* --- DYNAMIC CONTENT --- */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* --- TECH TAGS LOOP --- */}
                {/* This inner loop creates a badge for each technology (HTML, CSS, etc.) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-amber-900/20 text-amber-300 border border-amber-900/30 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* --- GITHUB BUTTON --- */}
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:underline hover:text-green-300 transition-colors"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;