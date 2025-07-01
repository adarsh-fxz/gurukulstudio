"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Heart, 
  Sparkles,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: Phone, text: '9702024403 / 01-4547265', href: 'tel:9702024403' },
    { icon: Mail, text: 'gurukulstudio11@gmail.com', href: 'mailto:gurukulstudio11@gmail.com' },
    { icon: Globe, text: 'gurukulstudio.com', href: 'https://gurukulstudio.com' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Enroll Now', href: '/enroll' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    { name: 'Creative Arts', href: '/programs#creative-arts' },
    { name: 'Mental Growth', href: '/programs#mental-growth' },
    { name: 'Physical Activities', href: '/programs#physical' },
    { name: 'Tech Skills', href: '/programs#tech' },
    { name: 'Life Skills', href: '/programs#life-skills' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl gradient-text">
                Gurukul Studio
              </span>
            </motion.div>
            <p className="text-muted-foreground mb-6">
              Where young minds grow and shine! Nurturing children aged 2-18 through creative learning and holistic development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                { icon: Youtube, href: '#', color: 'hover:text-red-600' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <motion.li
                  key={program.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={program.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {program.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Gurukul Studio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for amazing kids
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;