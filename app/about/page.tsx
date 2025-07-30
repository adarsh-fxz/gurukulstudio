"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Target, 
  Home, 
  School, 
  Building,
  CheckCircle,
  Users,
  Award,
  Sparkles,
  Star,
  Trophy,
  Shield
} from 'lucide-react';

export default function AboutPage() {
  const deliveryMethods = [
    {
      icon: Building,
      title: 'At Studio',
      description: 'Visit our well-equipped, child-friendly studio where learning comes alive with state-of-the-art facilities and a vibrant atmosphere.',
      features: ['Professional Equipment', 'Safe Environment', 'Peer Learning', 'Expert Supervision'],
      color: 'kid-teal',
      image: 'img9.jpeg',
    },
    {
      icon: School,
      title: 'In Schools',
      description: 'We bring our programs directly to your school, making quality education accessible and convenient for students.',
      features: ['In-School Programs', 'Flexible Scheduling', 'School Integration', 'Bulk Enrollment'],
      color: 'kid-purple',
      image: 'img4.jpeg',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace creativity and new approaches to learning.',
      icon: Sparkles,
      color: 'kid-purple'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: Trophy,
      color: 'kid-yellow'
    },
    {
      title: 'Inclusivity',
      description: 'We welcome children of all backgrounds and abilities.',
      icon: Heart,
      color: 'kid-pink'
    },
    {
      title: 'Fun Learning',
      description: 'We believe learning should be enjoyable and engaging.',
      icon: Star,
      color: 'kid-teal'
    },
  ];

  const teamMembers = [
    {
      name: 'Expert Instructors',
      description: 'Qualified professionals with years of experience in child development and specialized training in their respective fields.',
      image: 'img9.jpeg',
      specialties: ['Child Psychology', 'Creative Arts', 'STEM Education', 'Physical Development']
    },
    {
      name: 'Caring Mentors',
      description: 'Passionate educators who truly care about each child\'s growth and provide personalized attention to nurture individual talents.',
      image: 'img10.png',
      specialties: ['Emotional Support', 'Individual Guidance', 'Skill Development', 'Confidence Building']
    },
    {
      name: 'Supportive Educators',
      description: 'Compassionate teachers who create a safe and engaging learning space, fostering curiosity and well-being alongside academic and personal growth.',
      image: 'img11.png',
      specialties: ['Classroom Safety', 'Healthy Habits', 'Positive Reinforcement', 'Holistic Development']
    }    
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 gradient-bg-vibrant relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-8 h-8 text-kid-pink" />
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Gurukul Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are passionate about nurturing young minds and helping children discover their unique talents. 
              Our mission is to create a supportive environment where every child can grow, learn, and shine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="img3.jpeg"
                  alt="Children learning together"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kid-teal/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-kid-teal/10 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-kid-teal" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To provide comprehensive, age-appropriate programs that foster creativity, critical thinking, 
                    physical fitness, and life skills in children aged 2-18. We are committed to creating a 
                    nurturing environment where every child feels valued, supported, and empowered to reach 
                    their full potential.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="img5.jpeg"
                  alt="Vision for the future"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kid-purple/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:order-1"
            >
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-kid-purple/10 flex items-center justify-center">
                      <Target className="w-8 h-8 text-kid-purple" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the leading children's development center, recognized for our innovative programs, 
                    exceptional mentors, and positive impact on young lives. We envision a future where 
                    every child has access to quality education and enrichment opportunities that prepare them 
                    for success in an ever-changing world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="py-20 gradient-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that every child is unique and deserves personalized attention to discover and develop their talents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-${value.color}/10 flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 text-${value.color}`} />
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              How We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer flexible learning options to fit your family's needs and preferences.
            </p>
          </motion.div>

          <div className="space-y-20">
            {deliveryMethods.map((method, index) => {
              const Icon = method.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden group">
                      <img
                        src={method.image}
                        alt={method.title}
                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-${method.color}/20`} />
                      <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 rounded-full glass-effect flex items-center justify-center`}>
                          <Icon className={`w-8 h-8 text-${method.color}`} />
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
                      <h3 className="font-heading text-3xl font-bold mb-4">
                        {method.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {method.description}
                      </p>

                      <ul className="space-y-3">
                        {method.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className={`w-5 h-5 text-${method.color}`} />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 gradient-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Amazing Team</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our dedicated team of qualified mentors and instructors are passionate about 
              helping children discover their potential and achieve their dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-3">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span
                            key={specialtyIndex}
                            className="px-3 py-1 text-xs rounded-full bg-kid-purple/10 text-kid-purple"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}