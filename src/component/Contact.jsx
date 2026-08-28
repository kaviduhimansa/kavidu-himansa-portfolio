import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', detail: 'Explore my code', link: 'https://github.com/Bsit231032' },
    { icon: FaLinkedin, label: 'LinkedIn', detail: 'Let’s connect', link: 'https://www.linkedin.com/in/kavidu-himansa-0bb6802a6/' },
    { icon: FaFacebook, label: 'Facebook', detail: 'Follow my journey', link: 'https://www.facebook.com/' },
    { icon: FaWhatsapp, label: 'WhatsApp', detail: 'Chat with me', link: 'https://wa.me/940767379205' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white md:px-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Have a project in mind?
          </p>
          <h2 className="text-4xl font-extrabold md:text-6xl">
            Let’s <span className="text-amber-300">talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            I’m always open to new opportunities, creative ideas, and meaningful
            collaborations. Reach out and let’s build something great together.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-md md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map(({ icon: Icon, label, detail, link }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition-colors hover:border-cyan-400/50 hover:bg-slate-800"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="rounded-xl bg-white/10 p-3 text-xl text-gray-400 transition-colors group-hover:text-cyan-300">
                  <Icon />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-100">{label}</p>
                  <p className="text-sm text-gray-500">{detail}</p>
                </div>
              </motion.a>
            ))}

            <div className="mt-4 grid gap-3 border-t border-white/10 pt-6 sm:col-span-2 sm:grid-cols-2">
              <a href="mailto:kawwahimansa@gmail.com" className="group flex items-center justify-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-400 transition-colors hover:text-amber-300">
                <FaEnvelope className="text-cyan-400" />
                <span>kawwahimansa@gmail.com</span>
              </a>
              <a href="tel:+940767379205" className="group flex items-center justify-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-400 transition-colors hover:text-amber-300">
                <FaMobileAlt className="text-cyan-400" />
                <span>076 737 9205</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;