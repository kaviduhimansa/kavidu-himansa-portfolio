import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaJava } from 'react-icons/fa';
import {
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#8CC84B' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#2965F1' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'SQL', icon: FaDatabase, color: '#F29111' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C#', icon: FaCode, color: '#9B4F96' },
];

const Skills = () => (
  <section className="bg-slate-950 px-3 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 text-white">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-10 sm:mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          My toolkit
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Technologies I <span className="text-amber-300">use</span>
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-gray-400">
          A practical collection of tools I use to create fast, accessible, and
          polished digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <motion.div
            key={name}
            className="group rounded-lg sm:rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 text-center backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:bg-white/[0.08]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <Icon
              className="mx-auto mb-2 sm:mb-4 text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color }}
              aria-hidden="true"
            />
            <h3 className="text-xs sm:text-sm font-semibold text-gray-200">{name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
