"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  GraduationCap, 
  Clock, 
  Utensils, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const WhyChooseUsPreview = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Your child\'s safety is our top priority with secure facilities and caring supervision.',
      color: 'kid-teal',
    },
    {
      icon: GraduationCap,
      title: 'Qualified Mentors',
      description: 'Expert instructors passionate about nurturing young minds and talents.',
      color: 'kid-purple',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Programs that fit your family\'s schedule with morning and evening options.',
      color: 'kid-pink',
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Healthy, delicious meals to fuel learning and growth throughout the day.',
      color: 'kid-yellow',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Why Parents <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We create an environment where children thrive, learn, and develop 
              into confident, capable individuals. Here's what makes us special.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-${feature.color}/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button asChild size="lg" className="group">
              <Link href="/why-choose-us">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8613291/pexels-photo-8613291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children learning in a safe environment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-card border rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-kid-yellow" />
                <div>
                  <div className="font-semibold text-sm">98% Happy Parents</div>
                  <div className="text-xs text-muted-foreground">Love our care!</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-card border rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-kid-teal" />
                <div>
                  <div className="font-semibold text-sm">100% Safe</div>
                  <div className="text-xs text-muted-foreground">Always secure!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsPreview;