import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Target, Zap, BookOpen, Users } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      icon: Trophy,
      title: "Top 13% LeetCode Contest Rating",
      description: "Ranked in the Top 13% of LeetCode Contest Ratings and earned the 200 Days Coding badge in 2024",
      date: "2024",
      color: "from-yellow-400 to-orange-500",
      category: "Competitive Programming"
    },
    {
      icon: Award,
      title: "3rd Place in Team Coding Competition",
      description: "Achieved 3rd place in a team coding competition organized by Mozilla Firefox Club at VIT during Gravitas Tech Fest 2023",
      date: "2023",
      color: "from-neon-blue to-neon-purple",
      category: "Competition"
    },
    {
      icon: Star,
      title: "600+ LeetCode Problems Solved",
      description: "Solved 600+ questions on LeetCode, enhancing problem-solving and algorithmic skills with consistent practice",
      date: "2023-2024",
      color: "from-neon-purple to-neon-pink",
      category: "Achievement"
    },
    {
      icon: Medal,
      title: "CGPA Excellence",
      description: "Maintaining an outstanding CGPA of 9.21 throughout the B.Tech Computer Science program at VIT Vellore",
      date: "2022-Present",
      color: "from-green-400 to-blue-500",
      category: "Academic"
    },
    {
      icon: Target,
      title: "Core Member - TAG Club",
      description: "Served as Core Member at Technology and Gaming Club (TAG), designing UI/UX for events and improving engagement by 25%",
      date: "Apr 2024 - Jan 2025",
      color: "from-red-400 to-pink-500",
      category: "Leadership"
    },
    {
      icon: BookOpen,
      title: "Microsoft Azure AI Certified",
      description: "Microsoft Certified: Azure AI Fundamentals, demonstrating expertise in AI and cloud technologies",
      date: "2024",
      color: "from-indigo-400 to-purple-500",
      category: "Certification"
    }
  ];

  const certifications = [
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      icon: "☁️"
    },
    {
      name: "Accenture Data Analytics & Visualization",
      issuer: "Accenture North America",
      date: "2024",
      icon: "📊"
    },
    {
      name: "Supervised Machine Learning",
      issuer: "DeepLearning.AI",
      date: "2024",
      icon: "🤖"
    },

  ];

  const stats = [
    { label: "LeetCode Problems", value: "600+", icon: Target },
    { label: "Contest Rating", value: "Top 13%", icon: Star },
    { label: "CGPA", value: "9.21", icon: Award },
    { label: "Certifications", value: "3+", icon: Zap }
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of milestones, certifications, and recognitions that showcase my journey and dedication to excellence
          </p>
        </motion.div>


        {/* Main Achievements */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12">
            Major <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 group card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon size={20} className="text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-gray-400 text-sm">{achievement.date}</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12">
            Certifications & <span className="text-gradient">Courses</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 group card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm group-hover:text-neon-purple transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-500 text-xs">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready for <span className="text-gradient">New Challenges</span>
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always looking for opportunities to learn, grow, and contribute to exciting projects.
              Let's create something amazing together!
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users size={20} />
              Let's Connect
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;