import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaGraduationCap, FaMapMarkerAlt, FaRobot } from 'react-icons/fa';
// Update this path if your CV file name is different
import myCV from '../assets/kavidu.pdf'; 

const About = () => {
  const highlights = [
    { icon: FaCode, label: 'Focus', value: 'Web Development' },
    { icon: FaGraduationCap, label: 'Education', value: 'BSc (Hons) IT' },
    { icon: FaMapMarkerAlt, label: 'Based in', value: 'Sri Lanka' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 px-3 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 sm:h-80 md:h-96 w-72 sm:w-80 md:w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            About <span className="text-amber-300">me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-amber-300/10 p-6 sm:p-8 shadow-2xl shadow-cyan-950/30"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              aria-label="Animated portfolio chatbot"
              className="pointer-events-none absolute z-10 flex h-8 sm:h-10 w-8 sm:w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/70 bg-slate-950 text-cyan-300 shadow-lg shadow-cyan-400/40"
              animate={{
                left: ['10%', '90%', '90%', '10%', '10%'],
                top: ['12%', '12%', '88%', '88%', '12%'],
                rotate: [0, 10, 90, 180, 360],
              }}
              transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
            >
              <FaRobot size={16} className="sm:text-lg" />
            </motion.div>
            <div className="absolute -right-12 -top-12 h-24 sm:h-32 w-24 sm:w-32 rounded-full border border-cyan-300/20" />
            <p className="relative text-5xl sm:text-6xl font-black text-cyan-300/80">23</p>
            <p className="relative mt-2 text-lg sm:text-xl font-bold text-white">Years old</p>
            <p className="relative mt-4 sm:mt-6 max-w-xs text-sm sm:text-base leading-relaxed text-gray-400">
              Curious by nature, driven by purpose, and always learning something new.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
              Open to internship opportunities
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              <p>
            Hi, I'm Kavindu, a passionate and dedicated web developer from Sri Lanka. I'm currently a 23-year-old IT student pursuing a BSc(Hons) in IT degree at BCI Campus. I have a strong foundation in modern web technologies and a great passion for creating dynamic and responsive user interfaces.
              </p>
              <p>
            I'm always eager to learn new technologies and thrive on solving complex problems. My goal is to leverage my skills to build innovative and user-friendly web applications that make a real impact.
              </p>
              <p>
            Whether I'm coding a new solution, organizing a technical session, or collaborating on a club project, my mission is clear: to grow with purpose and empower others through technology and teamwork. I'm currently seeking internship opportunities to contribute to impactful projects.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 grid gap-2 sm:gap-3 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                  <Icon className="mb-2 sm:mb-3 text-lg sm:text-xl text-cyan-300" />
                  <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-200">{value}</p>
                </div>
              ))}
            </div>

            <motion.a
              href={myCV}
              download="Kavindu_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-transform hover:scale-105"
              whileHover={{ x: 4 }}
            >
              Download CV <FaArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;