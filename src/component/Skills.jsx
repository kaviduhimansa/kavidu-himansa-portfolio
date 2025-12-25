import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  // 1. State to track if the section is visible
  const [isVisible, setIsVisible] = useState(false);
  // 2. Ref to target the section DOM element
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // If the user sees the section, start animation
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once animation starts (optimization)
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'Python', level: 85, color: '#B0F060' },
    { name: 'Java', level: 75, color: '#B0F060' },
    { name: 'Kotlin', level: 65, color: '#B0F060' },
    { name: 'React', level: 90, color: '#FF9800' },
    { name: 'Vue.js', level: 60, color: '#FF9800' },
    { name: 'TailwindCSS', level: 95, color: '#FF9800' },
    { name: 'PHP', level: 50, color: '#8E44AD' },
    { name: 'Node.js', level: 70, color: '#8E44AD' },
    { name: 'Firebase', level: 45, color: '#8E44AD' },
    { name: 'HTML', level: 95, color: '#303F9F' },
    { name: 'CSS', level: 90, color: '#303F9F' },
    { name: 'JavaScript', level: 80, color: '#303F9F' },
    { name: 'MongoDB', level: 60, color: '#E91E63' },
    { name: 'SQL', level: 70, color: '#E91E63' },
    { name: 'C', level: 55, color: '#E91E63' },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef} // Attach the Ref here
      className="bg-slate-950 text-white py-16 px-4 md:px-16 rounded-xl"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          <span className="text-white">MY</span>
          {' '}
          <span className="text-amber-300">SKILLS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between text-gray-300 mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full"
                  style={{ 
                    // 1. Width Logic: 0% initially, then full % when visible
                    width: isVisible ? `${skill.level}%` : '0%', 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}60`,
                    
                    // 2. Animation Logic
                    transition: 'width 1.5s ease-out',
                    
                    // 3. Stagger Logic: Delay each bar by index * 0.1s
                    // Example: 1st bar waits 0s, 2nd waits 0.1s, 3rd waits 0.2s...
                    transitionDelay: `${index * 0.1}s` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;