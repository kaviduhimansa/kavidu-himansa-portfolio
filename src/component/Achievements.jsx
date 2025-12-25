import React from 'react';

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
    <section id="achievements" className="bg-slate-950  text-white py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          <span className="text-white">
            MY
          </span>
          {' '}
          <span className="text-amber-300">
             ACHIEVEMENTS
          </span>
        </h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I have successfully enhanced my skills and knowledge through various certifications, showcasing my commitment to continuous learning and professional growth:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.institution}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {item.certificates.map((cert, certIndex) => (
                    <li key={certIndex} className="flex justify-between items-center">
                      <span>{cert.name}</span>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-400 hover:underline hover:text-green-300 transition-colors"
                      >
                        view
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
