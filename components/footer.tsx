"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Heart, Code, Coffee, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const preferredName = personalInfo.preferredName || personalInfo.name.split(' ')[0] || personalInfo.name;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1A2730] text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E95D2C]/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#B0CEE2]/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {preferredName} Dastager
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                AI & Computer Science graduate using automation, analytics, and product intuition to ship systems 
                that make data useful. Always ready to tackle bold ideas with measurable impact.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#0077b5] rounded-full hover:bg-[#005885] transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </motion.a>
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#333333] rounded-full hover:bg-[#1a1a1a] dark:bg-[#6e6e6e] dark:hover:bg-[#555555] transition-colors duration-300"
                >
                  <Github className="h-5 w-5 text-white" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#B0CEE2]/30 rounded-full hover:bg-[#B0CEE2]/50 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Middle Column - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Education', href: '#education' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-[#E95D2C] transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#E95D2C]" />
                  {personalInfo.email}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-4 h-4 text-[#E95D2C]">📍</span>
                  {personalInfo.location}
                </p>
              </div>
              
              {/* Back to Top Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-6"
              >
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  className="bg-transparent border-[#E95D2C] text-[#E95D2C] hover:bg-[#E95D2C] hover:text-white transition-all duration-300"
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Back to Top
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} {personalInfo.name}. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </motion.div>
                <span>and</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Code className="h-4 w-4 text-[#B0CEE2]" />
                </motion.div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <span>Powered by caffeine</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Coffee className="h-4 w-4 text-[#E95D2C]" />
                </motion.div>
                <span>& passion</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
