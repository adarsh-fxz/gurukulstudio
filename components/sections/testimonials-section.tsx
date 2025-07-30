"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Manisha Thapa',
      role: '',
      content: 'My kids have been attending painting classes at Gurukul Studio, and it\'s been a wonderful experience. The studio provides a creative and encouraging space where they are growing every day. I\'ve seen real improvement in their skills, ideas, and confidence. They\'re always excited to try something new and express themselves through their art. Thank you to the entire GS team for guiding and inspiring them. Highly recommended to all the parents !',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjWqGedDC2gq_LN7JB9XPpbdkV3TwfukXG5UNHY6xlCq1nU2q3E=w36-h36-p-rp-mo-br100',
    },
    {
      name: 'Niriza Shrestha',
      role: '',
      content: 'We recently celebrated my son\'s birthday at Gurukul Studio, and it was an unforgettable experience! The team did a fantastic job organizing a variety of fun and creative activities like canvas painting, T-shirt dyeing, and engaging games that kept all the kids entertained and happy. The atmosphere was joyful and well-managed, making the day truly special for our family. Highly recommend Gurukul Studio for anyone looking to host a unique and memorable kids\' event',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjXyUzTKkcrh6JNCCVtd_osJzYFqDi-spXxeuPl548Qlv5IsCo2e=w36-h36-p-rp-mo-br100',
    },
    {
      name: 'Mark S',
      content: 'My son was there for 5 days only because of the term break, but he thoroughly enjoyed his time there. We thought he would be reluctant after just finishing his UKG, but we were totally surprised. He was looking  forward to going to the school albeit short as it may be. The teachers were highly praise worthy for taking care of the kid, making classes fun, listening to our inputs and suggesting us on things we can do to make our kids better. Highly recommended.Thank u Gurukul studio family.',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUg_lLijNC2HO5wWoFoM5Oyyg1w_I--dao2vU9bB3yMQ4PnISoQ=w36-h36-p-rp-mo-br100',
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
            { number: '50+', label: 'Happy Students', color: 'kid-teal' },
            { number: '98%', label: 'Parent Satisfaction', color: 'kid-purple' },
            { number: '7+', label: 'Programs', color: 'kid-pink' },
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