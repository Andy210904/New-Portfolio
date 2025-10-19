import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "NexChat - Realtime Chat Application",
      description: "Built a full-stack real-time chat application with user authentication and live communication using Socket.IO. Developed a backend API with Node.js and Express.js to handle WebSocket connections and chat management.",
      image: "../../public/Nexchat.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      github: "https://github.com/Andy210904/NexChat",
      demo: "https://nexchat-anpx.onrender.com",
      featured: true,
      stats: { stars: 1, forks: 0 }
    },
    {
      title: "Smart Rental Tracking System",
      description: "Built an equipment rental management system to streamline tracking, utilization, and operations. Developed a Next.js frontend, Node.js + Prisma backend, and integrated a Python ML service for predictive modeling.",
      image: "../../public/SmartRental.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "FastAPI", "Python"],
      github: "https://github.com/Andy210904/Smart-Rental-Tracking-System",
      demo: "https://smart-rental-tracker.vercel.app",
      featured: true,
      stats: { stars: 1, forks: 3 }
    },
    {
      title: "Customer Review Sentiment Analysis",
      description: "Scraped and preprocessed Trustpilot reviews using BeautifulSoup, NumPy, Pandas, and NLTK for sentiment analysis. Trained an ML model to classify reviews and visualized insights via Power BI dashboard.",
      image: "../../public/Senti.png",
      technologies: ["Python", "BeautifulSoup", "NumPy", "Pandas", "NLTK", "Scikit-learn", "Power BI"],
      github: "https://github.com/Andy210904/Customer-Review-Sentiment-Analysis",
      demo: "https://github.com/Andy210904/Customer-Review-Sentiment-Analysis/blob/main/DataScience.ipynb",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      title: "Code Review Assistant",
      description: "Developed an AI-powered web application that analyzes code quality and provides detailed feedback on logic, structure, and optimization. Built using React, Node.js, and Express with real-time review generation powered by Gemini API. Integrated user authentication, file upload, and multi-file review support for seamless collaboration.",
      image: "../../public/Code_rev.png",
      technologies: ["React", "Node.js", "Express", "Gemini API", "JavaScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/Andy210904/Code-Review-Assistant",
      demo: "https://code-review-assistant-one.vercel.app/",
      featured: false,
      stats: { "stars": 1, "forks": 0 }
    },
    {
      title: "Resume-Analyzer",
      description: "Built an AI-powered web tool to parse resumes, extract key information (skills, experience, education) and provide actionable feedback on role-fit and layout. Leveraged natural language processing and machine learning for resume scoring and optimized for recruiter readability.",
      image: "../../public/resume_analyser.png",
      technologies: ["Python", "Render", "spaCy", "NLTK", "scikit-learn", "PDF / DOCX parsing"],
      github: "https://github.com/Andy210904/Resume-Analyzer",
      demo: "https://resume-analyzer-lebh.onrender.com/",
      featured: false,
      stats: { "stars": 0, "forks": 0 }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creativity in solving real-world problems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden group card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden bg-gray-900/50 rounded-t-2xl">
                <img
                  src={project.image.startsWith('../../public/') ? project.image.replace('../../public/', '/') : project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full">Featured</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} className="text-gray-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl overflow-hidden group card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gray-900/50">
                  <img
                    src={project.image.startsWith('../../public/') ? project.image.replace('../../public/', '/') : project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-neon-purple transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star size={12} className="text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={12} className="text-gray-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/Andy210904"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;