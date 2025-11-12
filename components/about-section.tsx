"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Code, Users } from 'lucide-react';
import { aboutMe } from '@/lib/data';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Automation Architect",
      description: "Launched Zoho–Twilio + GPT workflows that eliminate manual reporting and onboarding lag."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Storyteller", 
      description: "Blend LLMs, ML, and BI dashboards to turn raw signals into executive-ready intelligence."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Sprint Lead",
      description: "Facilitate cross-functional pods, unblock constraints fast, and keep delivery measurable."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognized Achiever",
      description: "Scholarship + national accolades for innovation, analytics, and academic excellence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-[#F4FBFB] to-[#EAF3F7] dark:from-[#0B131B] dark:via-[#101E28] dark:to-[#142635] scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0FA5A2] to-[#E95D2C] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-[#253544] dark:text-[#C4E3F7]/80 leading-relaxed">
              <p className="text-xl md:text-[1.3rem] leading-relaxed font-light">{aboutMe}</p>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">40%</div>
                <div className="text-sm text-gray-600 dark:text-[#B0CEE2]/80 mt-1">Faster QA cycles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50%</div>
                <div className="text-sm text-gray-600 dark:text-[#B0CEE2]/80 mt-1">Lift in view rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-sm text-gray-600 dark:text-[#B0CEE2]/80 mt-1">Certs & honors</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/60 dark:border-[#1F2F3E] bg-white/80 dark:bg-[#0F1B23]/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_55px_rgba(15,23,42,0.12)] transition-all duration-300 backdrop-blur"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0FA5A2] to-[#E95D2C] flex items-center justify-center text-white shadow-lg">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#B0CEE2]/80 leading-relaxed text-lg">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Special Achievement Callout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 p-8 bg-gradient-to-r from-[#0F9DA2] via-[#1E6F8C] to-[#E95D2C] dark:from-[#0B2835] dark:via-[#104154] dark:to-[#233E4C] rounded-3xl text-white text-center shadow-[0_25px_60px_rgba(12,23,34,0.45)]"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
            >
              <Award className="h-8 w-8" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Special Recognition
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Chancellor’s Academic Merit Scholar, The Birmingham Award recipient, and nationally recognized by 
              HH Sheikh Hamdan Bin Mohammed Bin Rashid Al Maktoum & HE Mattar Al Tayer for solving advanced mathematics challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
