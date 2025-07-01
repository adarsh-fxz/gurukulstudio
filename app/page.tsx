"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/hero-section';
import FeaturedPrograms from '@/components/sections/featured-programs';
import WhyChooseUs from '@/components/sections/why-choose-us-preview';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CTASection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedPrograms />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}