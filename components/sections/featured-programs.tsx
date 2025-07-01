"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Brain, 
  Dumbbell, 
  Code, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 'creative-arts',
      icon: Palette,
      title: 'Creative Arts',
      description: 'Unleash creativity through art, craft, and music',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-pink',
      skills: ['Art & Craft', 'Guitar', 'Drawing', 'Painting'],
    },
    {
      id: 'mental-growth',
      icon: Brain,
      title: 'Mental Growth',
      description: 'Develop critical thinking and communication skills',
      image: 'https://images.pexels.com/photos/8613297/pexels-photo-8613297.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-purple',
      skills: ['Public Speaking', 'Vocabulary', 'Creative Writing', 'Reading'],
    },
    {
      id: 'physical',
      icon: Dumbbell,
      title: 'Physical Activities',
      description: 'Stay active and healthy with fun sports',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-orange',
      skills: ['Skating', 'Basketball', 'Hiking', 'Yoga'],
    },
    {
      id: 'tech',
      icon: Code,
      title: 'Tech Skills',
      description: 'Future-ready with AI, coding, and robotics',
      image: 'https://images.pexels.com/photos/8613315/pexels-photo-8613315.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-teal',
      skills: ['AI Basics', 'Coding', 'Robotics', 'Digital Literacy'],
    },
    {
      id: 'life-skills',
      icon: Users,
      title: 'Life Skills',
      description: 'Build confidence and leadership abilities',
      image: 'https://images.pexels.com/photos/8613295/pexels-photo-8613295.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-yellow',
      skills: ['Leadership', 'Entrepreneurship', 'Communication', 'Teamwork'],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Our Amazing <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect program for your child's growth and development. 
            Each program is designed to nurture different aspects of learning.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-${program.color}/20 backdrop-blur-sm flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${program.color}`} />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 text-xs rounded-full bg-${program.color}/10 text-${program.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                      {program.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          +{program.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;