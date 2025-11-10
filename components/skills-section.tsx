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
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Data Engineering & Automation",
      icon: <Server className="h-6 w-6" />,
      skills: skills["Data Engineering & Automation"],
      color: "from-stone-500 to-stone-600"
    },
    {
      title: "Business Intelligence & Storytelling",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: skills["Business Intelligence & Storytelling"],
      color: "from-zinc-500 to-zinc-600"
    },
    {
      title: "Programming & Product Engineering",
      icon: <Code className="h-6 w-6" />,
      skills: skills["Programming & Product Engineering"],
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Cloud & Platforms",
      icon: <Shield className="h-6 w-6" />,
      skills: skills["Cloud & Platforms"],
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Consulting & Strategy",
      icon: <Users className="h-6 w-6" />,
      skills: skills["Consulting & Strategy"],
      color: "from-stone-600 to-stone-700"
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
    <section id="skills" className="py-20 bg-gradient-to-br from-stone-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
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
              <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 mx-auto`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
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
                          className="text-sm font-medium hover:shadow-md transition-all duration-200 cursor-default"
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
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Data Science Leadership", level: 92, color: "slate" },
              { skill: "Data Engineering & Automation", level: 89, color: "stone" },
              { skill: "AI/ML Experimentation", level: 87, color: "zinc" },
              { skill: "Consulting & Strategy", level: 90, color: "gray" }
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
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <motion.path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={`rgb(${item.color === 'slate' ? '100 116 139' : item.color === 'stone' ? '120 113 108' : item.color === 'zinc' ? '113 113 122' : '107 114 128'})`}
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: `${item.level}, 100` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.level}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.skill}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
