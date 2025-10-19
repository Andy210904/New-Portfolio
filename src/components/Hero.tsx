import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="text-center z-10 max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-500 font-medium">Available for opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="block text-gray-100">Hi, I'm</span>
            <span className="block gradient-text">Aditya Dhane</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light mb-4">
            Full Stack Developer & Computer Science Student
          </h2>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>VIT Vellore, India</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>Class of 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I create modern web applications with a focus on{' '}
            <span className="text-primary-400 font-medium">user experience</span>,{' '}
            <span className="text-accent-400 font-medium">clean code</span>, and{' '}
            <span className="text-primary-400 font-medium">scalable architecture</span>.
            Currently maintaining a <span className="text-accent-400 font-medium">9.21 CGPA</span> while
            solving <span className="text-primary-400 font-medium">600+ LeetCode problems</span>.
          </p>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <div className="glass-card p-6 max-w-4xl mx-auto">
            <p className="text-gray-400 mb-4 text-sm">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'Next.js', 'Express.js', 'TailwindCSS'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="/Resume.pdf"
            download="Aditya_Dhane_Resume.pdf"
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>

          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/Andy210904',
              label: 'GitHub',
              color: 'hover:text-gray-100'
            },
            {
              icon: Linkedin,
              href: 'https://linkedin.com/in/aditya-dhane',
              label: 'LinkedIn',
              color: 'hover:text-primary-400'
            },
            {
              icon: Mail,
              href: 'mailto:adityadhane553@gmail.com',
              label: 'Email',
              color: 'hover:text-accent-400'
            },
          ].map(({ icon: Icon, href, label, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <span className="text-xs mb-2 font-medium">Scroll to explore</span>
            <ChevronDown size={20} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;