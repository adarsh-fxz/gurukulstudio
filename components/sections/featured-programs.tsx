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
  ArrowRight,
  Globe2
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const FeaturedPrograms = () => {
  const { theme } = useTheme();
  
  const programs = [
    {
      id: 'creative-arts',
      icon: Palette,
      title: 'Creative Arts',
      description: 'Unleash creativity through art, craft, and music',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: theme === 'dark' ? 'kid-teal' : 'kid-purple',
      skills: ['Art & Craft', 'Clay Modeling', 'Drawing', 'Painting'],
    },
    {
      id: 'mental-growth',
      icon: Brain,
      title: 'Mental Growth',
      description: 'Develop critical thinking and communication skills',
      image: 'https://images.pexels.com/photos/7269673/pexels-photo-7269673.jpeg?_gl=1*gg3kfy*_ga*MTEwMDk0NDA2NS4xNzQ3NzYyNTQ0*_ga_8JE65Q40S6*czE3NTI2NDg4MTYkbzMkZzEkdDE3NTI2NDk2MjckajU5JGwwJGgw',
      color: theme === 'dark' ? 'kid-teal' : 'kid-purple',
      skills: [ 'Public Speaking', 'Puzzle Solving', 'Chess', 'Journaling', 'Debating', 'Meditation'],
    },
    {
      id: 'physical',
      icon: Dumbbell,
      title: 'Physical Activities',
      description: 'Stay active and healthy with fun sports',
      image: 'https://plus.unsplash.com/premium_photo-1661385902874-d1a64404f284?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: theme === 'dark' ? 'kid-teal' : 'kid-purple',
      skills: ['Skating', 'Basketball', 'Yoga', 'Dance', 'Guitar'],
    },
    {
      id: 'tech',
      icon: Code,
      title: 'Tech Skills',
      description: 'Future-ready with AI, coding, and robotics',
      image: 'https://plus.unsplash.com/premium_photo-1661727578180-0f7a3f5ed122?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: theme === 'dark' ? 'kid-teal' : 'kid-purple',
      skills: ['Coding', 'AI', 'Robotics', 'Computational Thinking', 'Web Development'],
    },
    {
      id: 'life-skills',
      icon: Users,
      title: 'Life Skills',
      description: 'Build confidence and leadership abilities',
      image: 'https://plus.unsplash.com/premium_photo-1686920246064-f0b125432fbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: theme === 'dark' ? 'kid-teal' : 'kid-purple',
      skills: ['Discipline', 'Leadership', 'Teamwork', 'Self-awareness', 'First Aid & Safety', 'Time Management'],
    },
    {
      id: 'global-awareness',
      icon: Globe2,
      title: 'Global Awareness',
      description: 'Discover the world and learn how to make it better',
      image: 'https://images.pexels.com/photos/8542538/pexels-photo-8542538.jpeg?_gl=1*116pqq1*_ga*MTEwMDk0NDA2NS4xNzQ3NzYyNTQ0*_ga_8JE65Q40S6*czE3NTM4NjkyNjQkbzQkZzEkdDE3NTM4NjkzNzMkajU5JGwwJGgw',
      color: theme === 'dark' ? 'kid-teal' : 'kid-purple',
      skills: ['Helping Others', 'Saving Nature', 'Different Cultures', 'Kindness', 'Fairness', 'Team Projects'],
    }
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
                <Card className={`h-full overflow-hidden border-0 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20' 
                    : 'shadow-lg hover:shadow-xl'
                }`}>
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
                      {program.skills.slice(0, 6).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 text-xs rounded-full bg-${program.color}/10 text-${program.color}`}
                        >
                          {skill}
                        </span>
                      ))}
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