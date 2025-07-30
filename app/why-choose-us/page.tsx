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
  Heart,
  Award,
  Users,
  Sparkles,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure Environment',
      description: 'Your child\'s safety is our absolute priority. Our facilities are equipped with modern security systems, child-proof equipment, and trained staff who maintain constant supervision.',
      image: 'https://images.pexels.com/photos/8613291/pexels-photo-8613291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-teal',
      gradient: 'from-teal-400 to-cyan-500',
      benefits: ['24/7 Security', 'Child-Safe Equipment', 'Trained Supervisors', 'Emergency Protocols']
    },
    {
      icon: GraduationCap,
      title: 'Qualified & Caring Mentors',
      description: 'Our team consists of certified professionals who are not just experts in their fields but also passionate about nurturing young minds with patience and understanding.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-purple',
      gradient: 'from-purple-500 to-indigo-600',
      benefits: ['Certified Teachers', 'Child Psychology Training', 'Regular Skill Updates', 'Passionate Educators']
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We understand busy family schedules. Our programs offer morning, afternoon, and evening slots to accommodate your family\'s needs and your child\'s optimal learning times.',
      image: 'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-pink',
      gradient: 'from-pink-400 to-rose-500',
      benefits: ['Morning Sessions', 'Evening Classes', 'Weekend Programs', 'Holiday Camps']
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals & Snacks',
      description: 'Growing minds need proper nutrition. We provide healthy, balanced meals and snacks prepared with fresh ingredients to fuel your child\'s learning and development.',
      image: 'https://images.pexels.com/photos/8613290/pexels-photo-8613290.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-yellow',
      gradient: 'from-yellow-400 to-orange-500',
      benefits: ['Fresh Ingredients', 'Balanced Nutrition', 'Allergy Considerations', 'Healthy Snacks']
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'We focus on developing the whole child - intellectually, emotionally, socially, and physically. Our integrated approach ensures balanced growth in all areas.',
      image: 'https://images.pexels.com/photos/8613295/pexels-photo-8613295.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'kid-orange',
      gradient: 'from-orange-400 to-red-500',
      benefits: ['Emotional Intelligence', 'Social Skills', 'Physical Fitness', 'Creative Expression']
    }
];

  const stats = [
    { number: '50+', label: 'Happy Students', icon: Users, color: 'kid-teal' },
    { number: '98%', label: 'Parent Satisfaction', icon: Heart, color: 'kid-pink' },
    { number: '8+', label: 'Programs Offered', icon: Award, color: 'kid-purple' },
    { number: '5+', label: 'Awards & Recognition', icon: Star, color: 'kid-yellow' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 gradient-bg-vibrant relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
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
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-kid-purple" />
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
              Why Parents <span className="gradient-text">Choose Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes Gurukul Studio the preferred choice for families seeking 
              exceptional child development programs. We're committed to excellence in every aspect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                    <CardContent className="p-0">
                      <div className={`w-16 h-16 rounded-full bg-${stat.color}/10 flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 text-${stat.color}`} />
                      </div>
                      <div className={`text-3xl font-heading font-bold text-${stat.color} mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
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
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20`} />
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 rounded-full glass-effect flex items-center justify-center">
                          <Icon className={`w-8 h-8 text-${feature.color}`} />
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
                        {feature.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {feature.description}
                      </p>

                      {/* Benefits */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: benefitIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className={`w-5 h-5 text-${feature.color}`} />
                            <span className="font-medium">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 gradient-bg-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Experience the <span className="gradient-text">Gurukul Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of families who trust us with their children's growth and development. 
              Schedule a visit to see our facilities and meet our amazing team!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="group">
                <Link href="/enroll">
                  Enroll Your Child
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Schedule a Visit
                </Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-kid-teal" />
                <span>Call: </span>
                <a href="tel:9702024403" className="font-semibold text-kid-teal hover:underline">
                  9702024403
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-kid-purple" />
                <span>Email: </span>
                <a href="mailto:gurukulstudio11@gmail.com" className="font-semibold text-kid-purple hover:underline">
                  gurukulstudio11@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}