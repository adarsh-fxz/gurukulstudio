"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart, Star, Zap, Trophy } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const floatingElements = [
    { icon: Sparkles, color: 'text-kid-yellow', delay: 0, position: { left: '10%', top: '20%' } },
    { icon: Heart, color: 'text-kid-pink', delay: 0.5, position: { left: '80%', top: '15%' } },
    { icon: Star, color: 'text-kid-purple', delay: 1, position: { left: '15%', top: '70%' } },
    { icon: Zap, color: 'text-kid-teal', delay: 1.5, position: { left: '85%', top: '75%' } },
    { icon: Trophy, color: 'text-kid-orange', delay: 2, position: { left: '50%', top: '10%' } },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg-vibrant">
        <div className="absolute inset-0 opacity-30">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-kid-purple/20 to-kid-pink/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-kid-teal/20 to-kid-yellow/20 rounded-full blur-3xl animate-bounce-gentle"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-kid-orange/10 to-kid-pink/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.color} opacity-20 z-10`}
            style={element.position}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + index,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-16 h-16" />
          </motion.div>
        );
      })}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-6 py-3 rounded-full glass-effect text-primary font-medium text-sm mb-6 border border-primary/20">
              🌟 Where Young Minds Grow & Shine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to{' '}
            <span className="gradient-text block">
              Gurukul Studio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Nurturing children aged 2-18 through Creative Arts, Mental Growth, Physical Activities, 
            Tech Skills, and Life Skills development. Experience learning that's fun, engaging, and transformative!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <Button asChild size="lg" className="group text-lg px-8 py-6 rounded-full">
              <Link href="/enroll">
                Join Us Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full glass-effect">
              <Link href="/programs">
                Explore Programs
              </Link>
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-6 justify-center lg:justify-start"
          >
            {[
              { number: '500+', label: 'Happy Students', color: 'kid-teal' },
              { number: '15+', label: 'Programs', color: 'kid-purple' },
              { number: '5+', label: 'Years Experience', color: 'kid-pink' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className={`font-heading text-3xl font-bold text-${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Happy children learning at Gurukul Studio"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 gradient-primary opacity-20" />
            
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Enhanced Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass-effect border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Creative Arts</div>
                <div className="text-xs text-white/80">Express yourself!</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-6 -left-6 glass-effect border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-tertiary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Life Skills</div>
                <div className="text-xs text-white/80">Build confidence!</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 glass-effect border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="text-center">
              <Trophy className="w-8 h-8 text-kid-yellow mx-auto mb-2" />
              <div className="font-semibold text-white text-sm">Award Winning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;