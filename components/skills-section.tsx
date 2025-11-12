"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/data';
import { 
  Code, 
  Shield, 
  Users, 
  Brain,
  Server,
  BarChart3
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: <Brain className="h-6 w-6" />,
      skills: skills["Data Science & Analytics"],
      color: "from-[#1A2730] to-[#45586C]"
    },
    {
      title: "Data Engineering & Automation",
      icon: <Server className="h-6 w-6" />,
      skills: skills["Data Engineering & Automation"],
      color: "from-[#424048] to-[#1A2730]"
    },
    {
      title: "Business Intelligence & Storytelling",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: skills["Business Intelligence & Storytelling"],
      color: "from-[#B0CEE2] to-[#45586C]"
    },
    {
      title: "Programming & Product Engineering",
      icon: <Code className="h-6 w-6" />,
      skills: skills["Programming & Product Engineering"],
      color: "from-[#A63E1B] to-[#E95D2C]"
    },
    {
      title: "Cloud & Platforms",
      icon: <Shield className="h-6 w-6" />,
      skills: skills["Cloud & Platforms"],
      color: "from-[#1A2730] to-[#424048]"
    },
    {
      title: "Consulting & Strategy",
      icon: <Users className="h-6 w-6" />,
      skills: skills["Consulting & Strategy"],
      color: "from-[#45586C] to-[#B0CEE2]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#F1FAF9] via-white to-[#FFF5EF] dark:from-[#0B141D] dark:via-[#0F1F2B] dark:to-[#152633] scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2730] dark:text-[#B0CEE2] mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#E95D2C] mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-[1.2rem] text-[#2F3C4A] dark:text-[#C4E3F7]/80 max-w-3xl mx-auto font-light">
            A comprehensive skill set spanning multiple domains of technology and business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full rounded-2xl border border-white/60 dark:border-[#1F2F3E] bg-white/85 dark:bg-[#0F1B23]/85 backdrop-blur shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_55px_rgba(15,23,42,0.12)] transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 mx-auto`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1A2730] dark:text-[#B0CEE2]">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm font-medium bg-[#B0CEE2]/40 text-[#1A2730] dark:bg-[#424048] dark:text-[#B0CEE2] hover:shadow-md transition-all duration-200 cursor-default border-0"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-[#1A2730] dark:text-[#B0CEE2] mb-12">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Data Science Leadership", level: 92, color: "#E95D2C" },
              { skill: "Data Engineering & Automation", level: 89, color: "#A63E1B" },
              { skill: "AI/ML Experimentation", level: 87, color: "#45586C" },
              { skill: "Consulting & Strategy", level: 90, color: "#1A2730" }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#B0CEE2"
                      strokeWidth="2"
                    />
                    <motion.path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: `${item.level}, 100` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-[#1A2730] dark:text-[#B0CEE2]">{item.level}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-[#1A2730] dark:text-[#B0CEE2]">{item.skill}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
