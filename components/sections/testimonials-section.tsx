"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Mother of Arjun (Age 8)',
      content: 'Gurukul Studio has been amazing for my son! He\'s developed so much confidence in art and public speaking. The mentors are incredibly caring and skilled.',
      rating: 5,
      image: 'https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Father of Ananya (Age 12)',
      content: 'The coding and robotics program is fantastic! My daughter loves the hands-on approach and has already built her first robot. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Meera Patel',
      role: 'Mother of Kabir (Age 6)',
      content: 'The creative arts program is wonderful! Kabir comes home excited every day, showing off his artwork and singing new songs. Thank you, Gurukul Studio!',
      rating: 5,
      image: 'https://images.pexels.com/photos/8613299/pexels-photo-8613299.jpeg?auto=compress&cs=tinysrgb&w=300',
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
            What <span className="gradient-text">Parents Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what parents and children 
            have to say about their experience at Gurukul Studio.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-kid-purple/30" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-kid-yellow text-kid-yellow"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Happy Students', color: 'kid-teal' },
            { number: '98%', label: 'Parent Satisfaction', color: 'kid-purple' },
            { number: '50+', label: 'Awards Won', color: 'kid-pink' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <div className={`text-4xl font-heading font-bold text-${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;