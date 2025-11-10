"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Linkedin, 
  Github,
  Send,
  MessageCircle,
  Calendar,
  Star
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const resumePath = personalInfo.resume || '/Suhayl_Dastager_Resume.pdf';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Suhayl_Dastager_Resume.pdf';
    link.click();
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: personalInfo.email,
      action: () => window.open(`mailto:${personalInfo.email}`, '_blank'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: personalInfo.phone,
      action: () => window.open(`tel:${personalInfo.phone}`, '_blank'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      action: () => window.open(personalInfo.linkedin, '_blank'),
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      value: 'View my code',
      action: () => window.open(personalInfo.github, '_blank'),
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I collaborate with founders, marketing teams, and data leaders who care about measurable outcomes. If you need AI copilots, automation, or analytics that ship fast, let's build it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Open to opportunities in data science, data analysis, AI consulting, strategy consulting, data automation, 
                and data engineering across EMEA. Share the problem, the KPI, and the constraints—I’ll map the right stack, 
                facilitate the stakeholders, and own delivery end-to-end.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
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
                  <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CV Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
                >
                  <Download className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Download My CV</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button
                  onClick={downloadCV}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV (PDF)
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <MessageCircle className="h-7 w-7 text-blue-600" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 text-lg text-gray-600 mb-4">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Available for new opportunities</span>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a startup looking for technical expertise, an established company 
            seeking innovation, or a fellow developer interested in collaboration, 
            I'm excited to hear about your ideas and explore how we can work together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
