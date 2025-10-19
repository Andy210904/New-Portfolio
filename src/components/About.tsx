import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, BookOpen, Code2, Trophy } from 'lucide-react';

const About = () => {
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

  const stats = [
    {
      label: 'LeetCode Problems',
      value: '400+',
      icon: Code2,
      description: 'Solved with consistency'
    },
    {
      label: 'Global Ranking',
      value: 'Top 13%',
      icon: Trophy,
      description: 'Among all contestants'
    },
    {
      label: 'Academic Excellence',
      value: '9.21 CGPA',
      icon: GraduationCap,
      description: 'VIT Vellore'
    },
    {
      label: 'Projects Built',
      value: '10+',
      icon: BookOpen,
      description: 'Full-stack applications'
    }
  ];

  const highlights = [
    {
      title: 'Education & Academic Excellence',
      content: 'Currently pursuing B.Tech in Computer Science at VIT Vellore with a stellar 9.21 CGPA, focusing on advanced algorithms, data structures, and software engineering principles.',
      skills: ['Data Structures', 'Algorithms', 'System Design', 'Database Systems']
    },
    {
      title: 'Competitive Programming Excellence',
      content: 'Achieved significant success in competitive programming with 400+ LeetCode problems solved and Top 13% global ranking, developing strong analytical and problem-solving skills.',
      skills: ['Problem Solving', 'Algorithm Design', 'Time Complexity', 'Mathematical Thinking']
    },
    {
      title: 'Full-Stack Development',
      content: 'Experienced in building modern web applications using React, Node.js, and various databases, with a focus on clean architecture and user experience.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'REST APIs']
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
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
            <User className="text-primary-400" size={20} />
            <span className="text-gray-300 font-medium">About Me</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Building the <span className="gradient-text">Future</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Passionate computer science student and developer creating innovative solutions
            through code, algorithms, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center card-hover"
              variants={itemVariants}
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="glass-card p-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate computer science student at{' '}
                  <span className="text-primary-400 font-medium">VIT Vellore</span>, driven by
                  curiosity and a love for solving complex problems through technology.
                </p>

                <p>
                  My journey in tech began with competitive programming, where I honed my
                  problem-solving skills by tackling over{' '}
                  <span className="text-accent-400 font-medium">400 LeetCode problems</span> and
                  achieving a{' '}
                  <span className="text-primary-400 font-medium">Top 13% global ranking</span>.
                </p>

                <p>
                  This foundation in algorithms naturally evolved into full-stack web development,
                  where I combine analytical thinking with creative design to build applications
                  that are both efficient and user-friendly.
                </p>

                <p>
                  I'm particularly interested in{' '}
                  <span className="text-accent-400 font-medium">modern web technologies</span>,
                  <span className="text-primary-400 font-medium"> scalable architecture</span>,
                  and creating solutions that make a meaningful impact.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 card-hover"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-white mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {highlight.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlight.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">My Philosophy</h3>
            <blockquote className="text-lg text-gray-300 leading-relaxed italic">
              "Great software isn't just about clean code or efficient algorithms—it's about
              understanding real problems and crafting solutions that genuinely improve people's lives.
              Every line of code is an opportunity to make something better."
            </blockquote>
            <div className="mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;