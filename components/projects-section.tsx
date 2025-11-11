"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { ExternalLink, Github, Image as ImageIcon, Code2, Brain, TrendingUp, BarChart3, Coffee, Car, Utensils, MapPin, BookOpen } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projectIcons = {
    'DPH Classifieds – UAE Car Marketplace': <Car className="h-6 w-6" />,
    'Olist E-Commerce Analytics Dashboard | Tableau + Python': <BarChart3 className="h-6 w-6" />,
    '📊 Mini Project: Nutrition Analysis': <Utensils className="h-6 w-6" />,
    '☕ Coffee Ratings EDA Project': <Coffee className="h-6 w-6" />,
    'Workora': <Code2 className="h-6 w-6" />,
    'MoneyMentor': <TrendingUp className="h-6 w-6" />,
    'FemmeVenture': <MapPin className="h-6 w-6" />,
    'VirtualED': <BookOpen className="h-6 w-6" />,
    'Semantic Embedding': <Brain className="h-6 w-6" />,
    'Web Stock Predictor': <TrendingUp className="h-6 w-6" />,
    'Penguin Attribute Analysis': <BarChart3 className="h-6 w-6" />,
    'Crypto Analysis Dashboard': <TrendingUp className="h-6 w-6" />
  } as const;

  const projectColors = Array(projects.length).fill('from-[#e95d2c] to-[#e95d2c]');

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

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#e95d2c]/10 dark:from-[#1A2730] dark:via-[#424048] dark:to-[#1A2730] scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#e95d2c] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-[#B0CEE2]/80 max-w-3xl mx-auto">
            Advisory-grade builds across data science, analytics consulting, AI automation, and decision intelligence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full bg-white/80 dark:bg-[#1A2730]/80 backdrop-blur-sm border border-[#B0CEE2]/40 dark:border-[#45586C] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Project Image/Icon Area */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${projectColors[index]} opacity-90`}
                    animate={{ 
                      scale: hoveredProject === index ? 1.1 : 1,
                      opacity: hoveredProject === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.image && project.image !== '/project-placeholder.jpg' ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <motion.div
                        animate={{ 
                          scale: hoveredProject === index ? 1.2 : 1,
                          rotate: hoveredProject === index ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-white"
                      >
                        {projectIcons[project.name as keyof typeof projectIcons] || <ImageIcon className="h-16 w-16" />}
                      </motion.div>
                    )}
                  </div>

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    {project.github || project.demo ? (
                      <div className="flex gap-2">
                        {project.github && (
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="bg-white/90 text-gray-900 hover:bg-white"
                            onClick={() => window.open(project.github as string, '_blank')}
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="bg-white/90 text-gray-900 hover:bg-white"
                            onClick={() => window.open(project.demo!, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </Button>
                        )}
                      </div>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/90 text-gray-900 hover:bg-white dark:bg-[#1A2730] dark:text-[#B0CEE2] dark:hover:bg-[#1A2730]/80"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Discuss project
                      </Button>
                    )}
                  </motion.div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#E95D2C] transition-colors">
                        {project.name}
                      </CardTitle>
                      {project.impact && (
                        <p className="text-sm text-gray-500 dark:text-[#B0CEE2]/70 mt-1">
                          {project.impact}
                        </p>
                      )}
                    </div>
                    {project.year && (
                      <Badge className="bg-[#B0CEE2]/30 text-[#1A2730] dark:bg-[#424048] dark:text-[#B0CEE2] border-0">
                        {project.year}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-[#B0CEE2]/80 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (index * 0.1) + (techIndex * 0.05), 
                          duration: 0.3 
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                          <Badge
                            variant="outline"
                            className="text-xs font-medium hover:bg-[#B0CEE2]/30 hover:border-[#B0CEE2]/60 transition-colors dark:text-[#B0CEE2]"
                          >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Status Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="h-1 bg-[#e95d2c] rounded-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Project Categories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                category: 'AI & Automation', 
                count: 2, 
                icon: <Brain className="h-6 w-6" />,
                color: 'from-[#e95d2c] to-[#e95d2c]'
              },
              { 
                category: 'Analytics & BI', 
                count: 2, 
                icon: <BarChart3 className="h-6 w-6" />,
                color: 'from-[#e95d2c] to-[#e95d2c]'
              },
              { 
                category: 'NLP & Data Apps', 
                count: 1, 
                icon: <Code2 className="h-6 w-6" />,
                color: 'from-[#e95d2c] to-[#e95d2c]'
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/70 dark:bg-[#1A2730]/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-[#45586C] hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {category.category}
                </h4>
                <p className="text-3xl font-bold gradient-text mb-1">
                  {category.count}
                </p>
                <p className="text-sm text-gray-600 dark:text-[#B0CEE2]/80">
                  Projects
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-[#B0CEE2]/80 mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#e95d2c] text-white px-8 py-3 text-lg hover:shadow-lg transition-all duration-300"
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
