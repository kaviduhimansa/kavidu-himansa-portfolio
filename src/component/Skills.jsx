import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  
  // Standard professional colors for each technology
  const skills = [
    { name: 'Java', level: 75, color: '#B0F060' },       // Neon Green
    { name: 'React', level: 90, color: '#00D8FF' },      // Cyan
    { name: 'Vue.js', level: 60, color: '#42b883' },     // Vue Green
    { name: 'TailwindCSS', level: 95, color: '#38BDF8' },// Sky Blue
    { name: 'PHP', level: 50, color: '#777BB4' },       // Purple
    { name: 'Node.js', level: 70, color: '#8CC84B' },    // Node Green
    { name: 'HTML', level: 95, color: '#E34F26' },       // Orange Red
    { name: 'CSS', level: 90, color: '#2965F1' },        // Blue
    { name: 'JavaScript', level: 80, color: '#F7DF1E' }, // Bright Yellow
    { name: 'SQL', level: 70, color: '#F29111' },       // Orange
    { name: 'C++', level: 55, color: '#00599C' },        // Dark Blue
    { name: 'C#', level: 60, color: '#9B4F96' },         // Purple
  ];

  return (
    <section id="skills" className="bg-slate-950 text-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* CLEAN HEADING (No Scramble Effect) */}
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">MY</span>
          {' '}
          <span className="text-amber-300">SKILLS</span>
        </motion.h2>
        
        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              
              {/* Skill Name & Percentage */}
              <div className="flex justify-between text-gray-300 mb-2">
                <span className="font-bold tracking-wide">{skill.name}</span>
                <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
              </div>
              
              {/* Progress Bar Background */}
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
                
                {/* Animated Fill Bar */}
                <motion.div
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: skill.color }}
                  
                  // Animation: Slide from 0 to full width
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  
                  // Transition: Smooth ease-out, staggered by index
                  transition={{ 
                    duration: 1, 
                    ease: "easeOut", 
                    delay: index * 0.05 
                  }}
                  viewport={{ once: true }} // Ensures it only animates the first time you scroll to it
                >
                  {/* Optional: Subtle Glow on the bar itself */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-[2px]"></div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;