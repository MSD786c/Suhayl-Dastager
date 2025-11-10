"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/data';
import { Building, Calendar, ChevronRight, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Impact-focused roles across automation, analytics, and growth where every project shipped measurable gains.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-600 hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-900/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                              {experience.position}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-lg text-slate-600 dark:text-slate-400 font-semibold mb-2">
                              <Building className="h-5 w-5" />
                              {experience.company}
                            </div>
                            <div className="flex flex-col gap-1 text-slate-600 dark:text-slate-400">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {experience.duration}
                              </div>
                              {experience.location && (
                                <div className="flex items-center gap-2 text-sm">
                                  <MapPin className="h-4 w-4" />
                                  {experience.location}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-gradient-to-r from-slate-100 to-stone-100 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 border-0"
                            >
                              {experience.tag || 'Impact Role'}
                            </Badge>
                          </motion.div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          {experience.description.map((desc, descIndex) => (
                            <motion.div
                              key={descIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: (index * 0.2) + (descIndex * 0.1), 
                                duration: 0.5 
                              }}
                              className="flex items-start gap-3"
                            >
                              <ChevronRight className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                {desc}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {experience.metrics && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="flex flex-wrap gap-2 mt-6"
                          >
                            {experience.metrics.map((metric) => (
                              <Badge
                                key={metric}
                                variant="outline"
                                className="text-xs uppercase tracking-wide border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                              >
                                {metric}
                              </Badge>
                            ))}
                          </motion.div>
                        )}

                        {/* Additional visual elements for specific roles */}
                        {experience.company === 'Halliday Forfaiting Services' && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-stone-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-slate-500 dark:bg-slate-400 rounded-full"></div>
                              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Automation Ops
                              </span>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Built GPT-powered onboarding & Zoho pipelines that now serve as the backbone of daily ops.
                            </p>
                          </motion.div>
                        )}

                        {experience.company === 'Loop Media' && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-6 p-4 bg-gradient-to-r from-stone-50 to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-lg border border-stone-200 dark:border-slate-600"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-stone-500 dark:bg-stone-400 rounded-full"></div>
                              <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                                Creative Impact
                              </span>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Turned creative instincts + data science dashboards into 7 viral wins >1M views.
                            </p>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-stone-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">35%+</div>
            <div className="text-slate-600 dark:text-slate-400">Process acceleration</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-stone-50 to-zinc-50 dark:from-slate-700 dark:to-slate-800 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">7</div>
            <div className="text-slate-600 dark:text-slate-400">Client automation & analytics launches</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-zinc-50 to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">5</div>
            <div className="text-slate-600 dark:text-slate-400">Industries advised</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
