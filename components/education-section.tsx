"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { education, certifications } from '@/lib/data';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Building, 
  ExternalLink,
  BookOpen,
  Star
} from 'lucide-react';

const EducationSection = () => {
  const [showAllCerts, setShowAllCerts] = React.useState(false);
  const displayedCertifications = showAllCerts ? certifications : certifications.slice(0, 2);
  const hasMoreCerts = certifications.length > 2;
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

  const handleCertificateClick = (link: string) => {
    if (link && link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      alert('Credential available upon request.');
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-[#1A2730] scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-[#e95d2c] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-[#B0CEE2]/80 max-w-3xl mx-auto">
            Academic foundation and professional certifications driving continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-[#E95D2C]" />
                Education
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card
                    className={`bg-white/90 dark:bg-[#1A2730]/85 border border-[#B0CEE2]/40 dark:border-[#45586C] shadow-lg hover:shadow-xl transition-all duration-300 ${edu.status === 'Completed' ? 'ring-2 ring-[#E95D2C]/40 dark:ring-[#E95D2C]/50' : ''}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle
                            className={`text-xl font-bold mb-2 ${edu.status === 'Completed' ? 'text-[#E95D2C]' : 'text-gray-900 dark:text-white'}`}
                          >
                            {edu.degree}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-lg text-[#A63E1B] dark:text-[#F7B08A] font-semibold mb-2">
                            <Building className="h-5 w-5" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-[#B0CEE2]/80 mb-2">
                            <Calendar className="h-4 w-4" />
                            {edu.duration}
                          </div>
                          {edu.major && (
                            <div className="flex items-center gap-2 text-gray-600 dark:text-[#B0CEE2]/80">
                              <BookOpen className="h-4 w-4" />
                              Major: {edu.major}
                            </div>
                          )}
                          {edu.highlights && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {edu.highlights.map((highlight) => (
                                <Badge
                                  key={highlight}
                                  variant="secondary"
                                  className="text-xs bg-white/70 text-[#1A2730] dark:bg-[#424048] dark:text-[#B0CEE2]"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <Badge 
                          variant="secondary"
                          className={edu.status === 'Completed' ? 'bg-[#E95D2C]/15 text-[#E95D2C] border-0' : 'bg-[#B0CEE2]/30 text-[#1A2730] dark:text-[#B0CEE2] dark:bg-[#23313F]/70 border-0'}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#E95D2C]" />
                Certifications
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
              id="certification-list"
              layout
            >
              <AnimatePresence initial={false}>
                {displayedCertifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card className="bg-white/90 dark:bg-[#1A2730]/85 border border-[#B0CEE2]/40 dark:border-[#45586C] shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        {/* Certificate Icon Placeholder */}
                        <div className="flex-shrink-0 w-16 h-16 bg-[#e95d2c]/15 dark:bg-[#E95D2C]/25 rounded-lg flex items-center justify-center">
                          <Award className="h-8 w-8 text-[#E95D2C]" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#E95D2C] transition-colors">
                            {cert.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-[#A63E1B] dark:text-[#F7B08A] font-semibold mb-1">
                            <Building className="h-4 w-4" />
                            {cert.issuer}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-[#B0CEE2]/80 mb-3">
                            <Calendar className="h-4 w-4" />
                            {cert.date}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleCertificateClick(cert.link)}
                              className="bg-[#e95d2c] text-white hover:shadow-lg transition-all duration-300"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View Credential
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMoreCerts && (
              <div className="text-center mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowAllCerts((prev) => !prev)}
                  className="border-[#E95D2C] text-[#E95D2C] dark:text-[#F7B08A] dark:border-[#F7B08A] bg-transparent hover:bg-[#E95D2C]/10 dark:hover:bg-[#F7B08A]/10"
                  aria-expanded={showAllCerts}
                  aria-controls="certification-list"
                >
                  {showAllCerts ? 'Show Fewer Certifications' : 'View More Certifications'}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-20 p-8 bg-gradient-to-r from-[#A63E1B] to-[#E95D2C] rounded-2xl text-white"
            >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-[#B0CEE2]">Universities</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div className="text-3xl font-bold mb-2">{certifications.length}</div>
              <div className="text-[#B0CEE2]">Certifications</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-3xl font-bold mb-2">AI</div>
              <div className="text-[#B0CEE2]">Specialization</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <div className="text-3xl font-bold mb-2">2025</div>
              <div className="text-[#B0CEE2]">Graduation</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Key Skills Developed
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Artificial Intelligence', 'Machine Learning', 'Data Science', 
              'Software Engineering', 'Problem Solving', 'Research Methods',
              'Programming Languages', 'System Design', 'Project Management',
              'Leadership', 'Innovation', 'Critical Thinking'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-sm font-medium text-[#1A2730] dark:text-[#B0CEE2] border-[#B0CEE2]/60 dark:border-[#45586C] bg-white/70 dark:bg-transparent hover:bg-[#B0CEE2]/30 dark:hover:bg-[#45586C]/50 transition-all duration-200 cursor-default"
                >
                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
