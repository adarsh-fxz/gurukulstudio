"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Brain, 
  Dumbbell, 
  Code, 
  Users, 
  ArrowRight,
  Music,
  Brush,
  Mic,
  BookOpen,
  PenTool,
  Target,
  Zap,
  Gamepad2,
  Trophy,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      id: 'creative-arts',
      icon: Palette,
      title: 'Creative Arts',
      description: 'Unleash creativity through various artistic mediums and self-expression',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'kid-pink',
      gradient: 'from-pink-400 to-purple-500',
      skills: [
        { name: 'Art & Craft', icon: Brush, description: 'Creative projects and handmade crafts' },
        { name: 'Guitar', icon: Music, description: 'Learn to play beautiful melodies' },
        { name: 'Drawing', icon: PenTool, description: 'Express ideas through visual art' },
        { name: 'Painting', icon: Palette, description: 'Color theory and artistic techniques' },
      ],
    },
    {
      id: 'mental-growth',
      icon: Brain,
      title: 'Mental Growth',
      description: 'Develop critical thinking, communication, and cognitive abilities',
      image: 'https://images.pexels.com/photos/8613297/pexels-photo-8613297.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'kid-purple',
      gradient: 'from-purple-500 to-indigo-600',
      skills: [
        { name: 'Public Speaking', icon: Mic, description: 'Build confidence in communication' },
        { name: 'Vocabulary Building', icon: BookOpen, description: 'Expand language skills' },
        { name: 'Creative Writing', icon: PenTool, description: 'Express thoughts through words' },
        { name: 'Reading Comprehension', icon: BookOpen, description: 'Improve understanding skills' },
      ],
    },
    {
      id: 'physical',
      icon: Dumbbell,
      title: 'Physical Activities',
      description: 'Stay active, healthy, and develop motor skills through sports',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'kid-orange',
      gradient: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Skating', icon: Zap, description: 'Balance and coordination skills' },
        { name: 'Basketball', icon: Target, description: 'Team sports and strategy' },
        { name: 'Hiking', icon: Heart, description: 'Outdoor adventures and fitness' },
        { name: 'Yoga', icon: Heart, description: 'Mindfulness and flexibility' },
      ],
    },
    {
      id: 'tech',
      icon: Code,
      title: 'Tech Skills',
      description: 'Future-ready skills in technology, AI, and digital literacy',
      image: 'https://images.pexels.com/photos/8613315/pexels-photo-8613315.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'kid-teal',
      gradient: 'from-teal-400 to-cyan-500',
      skills: [
        { name: 'AI Basics', icon: Brain, description: 'Understanding artificial intelligence' },
        { name: 'Coding', icon: Code, description: 'Programming fundamentals' },
        { name: 'Robotics', icon: Gamepad2, description: 'Build and program robots' },
        { name: 'Digital Literacy', icon: Target, description: 'Navigate the digital world' },
      ],
    },
    {
      id: 'life-skills',
      icon: Users,
      title: 'Life Skills',
      description: 'Build confidence, leadership, and essential life abilities',
      image: 'https://images.pexels.com/photos/8613295/pexels-photo-8613295.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'kid-yellow',
      gradient: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'Leadership', icon: Trophy, description: 'Guide and inspire others' },
        { name: 'Entrepreneurship', icon: Target, description: 'Business and innovation skills' },
        { name: 'Communication', icon: Mic, description: 'Effective interpersonal skills' },
        { name: 'Teamwork', icon: Users, description: 'Collaborate and cooperate' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 gradient-bg-vibrant relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-kid-pink rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-kid-teal rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-kid-yellow rounded-full animate-bounce-gentle"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Amazing <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover comprehensive programs designed to nurture every aspect of your child's development. 
              From creative arts to technology, we offer engaging experiences that inspire growth and learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-20`} />
                      <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 rounded-full glass-effect flex items-center justify-center`}>
                          <Icon className={`w-8 h-8 text-${program.color}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                        {program.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {program.description}
                      </p>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {program.skills.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon;
                          return (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ y: -5 }}
                            >
                              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-4">
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 rounded-full bg-${program.color}/10 flex items-center justify-center`}>
                                      <SkillIcon className={`w-5 h-5 text-${program.color}`} />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>

                      <Button size="lg" className="group">
                        <Link href="/enroll" className="flex items-center">
                          Enroll in {program.title}
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Child's
              <span className="gradient-text block">Learning Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the perfect program for your child and watch them grow, learn, and shine!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/enroll">
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}