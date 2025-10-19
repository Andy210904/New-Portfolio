import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Database, Globe, Brain,
  Server, GitBranch, Terminal, Palette, Zap, Monitor
} from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "C++", level: 95, desc: "Competitive Programming" },
        { name: "Python", level: 90, desc: "Data Science & Backend" },
        { name: "JavaScript", level: 85, desc: "Full Stack Development" },
        { name: "C", level: 90, desc: "System Programming" },
        { name: "SQL", level: 80, desc: "Database Management" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90, desc: "Component Architecture" },
        { name: "Next.js", level: 85, desc: "Full Stack React" },
        { name: "Tailwind CSS", level: 90, desc: "Utility-First CSS" },
        { name: "TypeScript", level: 75, desc: "Type-Safe JavaScript" },
        { name: "HTML/CSS", level: 95, desc: "Web Fundamentals" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, desc: "Server-Side JavaScript" },
        { name: "Express.js", level: 85, desc: "Web Framework" },
        { name: "MongoDB", level: 80, desc: "NoSQL Database" },
        { name: "Socket.IO", level: 85, desc: "Real-time Communication" },
        { name: "REST APIs", level: 90, desc: "API Development" }
      ]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: [
        { name: "Pandas", level: 85, desc: "Data Manipulation" },
        { name: "NumPy", level: 85, desc: "Numerical Computing" },
        { name: "Scikit-learn", level: 80, desc: "Machine Learning" },
        { name: "Power BI", level: 75, desc: "Data Visualization" },
        { name: "NLTK", level: 75, desc: "Natural Language Processing" }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch, color: "text-green-400" },
    { name: "VS Code", icon: Monitor, color: "text-blue-400" },
    { name: "Terminal", icon: Terminal, color: "text-purple-400" },
    { name: "Figma", icon: Palette, color: "text-yellow-400" },
    { name: "Postman", icon: Zap, color: "text-green-400" },
    { name: "Docker", icon: Database, color: "text-blue-400" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            variants={itemVariants}
          >
            <Terminal className="text-primary-400" size={20} />
            <span className="text-gray-300 font-medium">Technical Skills</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            My <span className="gradient-text">Tech Stack</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Technologies and tools I use to build modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass-card rounded-lg p-6 card-hover"
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 mr-4">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-500 ml-2">
                          {skill.desc}
                        </span>
                      </div>
                      <span className="text-sm font-mono text-primary-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Development <span className="gradient-text">Tools</span>
            </h3>
            <p className="text-gray-400">Tools and technologies that power my development workflow</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="tech-icon"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <tool.icon size={24} className={`${tool.color}`} />
                <span className="sr-only">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Skills in <span className="gradient-text">Numbers</span>
              </h3>
              <p className="text-gray-400">Quantified achievements and experience</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Problems Solved', value: '400+', description: 'LeetCode & Contests' },
                { label: 'Global Ranking', value: 'Top 13%', description: 'Competitive Programming' },
                { label: 'Projects Built', value: '10+', description: 'Full-Stack Applications' },
                { label: 'Technologies', value: '15+', description: 'Languages & Frameworks' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;