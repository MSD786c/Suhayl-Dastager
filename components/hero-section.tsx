"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, techStack } from '@/lib/data';
import Image from 'next/image';

const HeroSection = () => {
  const highlightName = personalInfo.preferredName || personalInfo.name.split(' ')[0] || personalInfo.name;
  const resumePath = personalInfo.resume || '/Suhayl_Dastager_Resume.pdf';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Suhayl_Dastager_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B0CEE2] via-white to-[#E95D2C]/10 dark:from-[#1A2730] dark:via-[#424048] dark:to-[#1A2730] relative overflow-hidden pt-24">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#B0CEE2]/60 dark:bg-[#45586C] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E95D2C]/30 dark:bg-[#1A2730] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#A63E1B]/20 dark:bg-[#424048] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#45586C] dark:text-[#B0CEE2] mb-4"
              >
                {personalInfo.headline}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-[#1A2730] dark:text-[#B0CEE2] leading-tight"
              >
                Hello, I'm{' '}
                <span className="gradient-text">
                  {highlightName}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-[#45586C] dark:text-[#B0CEE2]/80 mt-4"
              >
                {personalInfo.title}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-[#424048] dark:text-[#B0CEE2]/80 leading-relaxed max-w-2xl"
            >
              I operate across data science, analytics consulting, and automation engineering—sizing problems with stakeholders, 
              running the models/experiments that matter, then building the cloud + AI products that make insights stick. 
              Whether it’s standing up a finance copilot, architecting data pipelines, or advising on strategy decks, I always tie the story back to KPIs.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 text-sm text-[#45586C] dark:text-[#B0CEE2]/80"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-[#1A2730] to-[#45586C] text-white px-8 py-3 text-lg hover:shadow-lg transition-all duration-300 border-0"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
                className="px-8 py-3 text-lg hover:shadow-lg transition-all duration-300 border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white dark:border-[#0077b5] dark:text-[#0077b5] dark:hover:bg-[#0077b5]"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.open(personalInfo.github, '_blank')}
                className="px-8 py-3 text-lg hover:shadow-lg transition-all duration-300 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white dark:border-[#6e6e6e] dark:text-[#6e6e6e] dark:hover:bg-[#6e6e6e]"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated background glow */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.08, 1]
                }}
                transition={{ 
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#A63E1B] to-[#E95D2C] dark:from-[#A63E1B] dark:to-[#E95D2C] rounded-3xl blur-2xl opacity-20 dark:opacity-30"
              />
              
              {/* Secondary glow layer */}
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#B0CEE2] to-white dark:from-[#1A2730] dark:to-[#45586C] rounded-3xl blur-xl"
              />
              
              {/* Main image container with enhanced styling */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 384px"
                  className="object-contain object-center hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
              
              {/* Enhanced floating elements with natural colors */}
              <motion.div
                animate={{ 
                  y: [-12, 12, -12],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white dark:bg-[#1A2730] rounded-full p-4 shadow-xl border border-[#B0CEE2]/40 dark:border-[#45586C]"
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-gradient-to-r from-[#A63E1B] to-[#E95D2C] dark:from-[#A63E1B] dark:to-[#E95D2C] rounded-full"
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  rotate: [0, -15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1A2730] rounded-full p-3 shadow-xl border border-[#B0CEE2]/40 dark:border-[#45586C]"
              >
                <motion.div 
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 bg-gradient-to-r from-[#1A2730] to-[#45586C] dark:from-[#B0CEE2] dark:to-[#45586C] rounded-full"
                />
              </motion.div>
              
              {/* Additional accent elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -left-2 w-3 h-3 bg-gradient-to-r from-[#A63E1B] to-[#E95D2C] dark:from-[#A63E1B] dark:to-[#E95D2C] rounded-full blur-sm"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -right-3 w-2 h-2 bg-gradient-to-r from-[#45586C] to-[#1A2730] dark:from-[#B0CEE2] dark:to-[#45586C] rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <p className="text-center text-slate-600 dark:text-slate-300 mb-6 md:mb-8 text-lg">
            Technologies I work with
          </p>
          <div className="overflow-hidden whitespace-nowrap px-1 sm:px-2 py-1">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="inline-flex space-x-6 sm:space-x-8"
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full border-2 border-[#E95D2C]/70 bg-white/90 text-[#1A2730] dark:border-[#E95D2C]/80 dark:bg-slate-900/40 dark:text-[#FCE3D6] font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
