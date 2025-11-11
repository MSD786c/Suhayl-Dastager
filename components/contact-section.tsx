"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';
import { 
  Mail, 
  Phone, 
  Download, 
  Linkedin, 
  Github,
  Calendar,
  Star,
  Rocket
} from 'lucide-react';

const ContactSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const resumePath = personalInfo.resume || '/Suhayl_Dastager_Resume.pdf';

  const downloadCV = () => {
    setIsDownloading(true);
    
    // Simulate download delay for animation
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Suhayl_Dastager_Resume.pdf';
      link.click();
      
      // Reset animation state after download
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: personalInfo.email,
      action: () => window.open(`mailto:${personalInfo.email}`, '_blank'),
      color: 'from-[#e95d2c] to-[#e95d2c]'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: personalInfo.phone,
      action: () => window.open(`tel:${personalInfo.phone}`, '_blank'),
      color: 'from-[#e95d2c] to-[#e95d2c]'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      action: () => window.open(personalInfo.linkedin, '_blank'),
      color: 'from-[#0077b5] to-[#0077b5]'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      value: 'View my code',
      action: () => window.open(personalInfo.github, '_blank'),
      color: 'from-[#333333] to-[#333333] dark:from-[#6e6e6e] dark:to-[#6e6e6e]'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#e95d2c]/10 dark:from-[#1A2730] dark:via-[#424048] dark:to-[#1A2730] scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#e95d2c] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-[#B0CEE2]/80 max-w-3xl mx-auto">
            I collaborate with founders, marketing teams, and data leaders who care about measurable outcomes. If you need AI copilots, automation, or analytics that ship fast, let's build it.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                onClick={method.action}
                className="cursor-pointer"
              >
                <Card className="bg-white/80 dark:bg-[#1A2730]/80 backdrop-blur-sm border border-[#B0CEE2]/40 dark:border-[#45586C] shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#E95D2C] transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 dark:text-[#B0CEE2]/80 group-hover:text-gray-700 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CV Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-r from-[#A63E1B] to-[#E95D2C] rounded-2xl text-white p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="max-w-2xl mx-auto relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
              >
                <Download className="h-8 w-8" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Download My CV</h3>
              <p className="text-[#B0CEE2] mb-8 text-lg leading-relaxed">
                Get a comprehensive overview of my experience, skills, and achievements in a professionally formatted PDF.
              </p>
              <Button
                onClick={downloadCV}
                disabled={isDownloading}
                size="lg"
                className="bg-white text-[#1A2730] hover:bg-[#B0CEE2]/20 hover:shadow-lg transition-all duration-300 font-semibold px-8 py-4 text-lg relative"
              >
                {isDownloading ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Rocket className="h-5 w-5" />
                    Launching...
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download CV (PDF)
                  </div>
                )}
              </Button>
            </div>

            {/* Rocket Animation */}
            {isDownloading && (
              <>
                {/* Stars background */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 0.5
                      }}
                    />
                  ))}
                </div>

                {/* Rocket */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  initial={{ y: 0, x: '-50%' }}
                  animate={{ 
                    y: -300,
                    x: ['-50%', `${-50 + (Math.random() * 40 - 20)}%`]
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Rocket className="h-12 w-12 text-white" fill="currentColor" />
                  </motion.div>
                  
                  {/* Rocket trail */}
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      opacity: [0.8, 0.4, 0.8],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 0.3,
                      repeat: Infinity
                    }}
                  >
                    <div className="w-2 h-8 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full"></div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-lg text-gray-600 dark:text-[#B0CEE2]/80 mb-4">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Available for new opportunities</span>
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-gray-600 dark:text-[#B0CEE2]/80 max-w-2xl mx-auto">
              Whether you're a startup looking for technical expertise, an established company 
              seeking innovation, or a fellow developer interested in collaboration, 
              I'm excited to hear about your ideas and explore how we can work together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;