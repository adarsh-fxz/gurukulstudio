"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Users,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function EnrollPage() {
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const programs = [
    { id: 'creative-arts', name: 'Creative Arts', description: 'Art, Craft, Guitar, Drawing' },
    { id: 'mental-growth', name: 'Mental Growth', description: 'Public Speaking, Vocabulary, Writing' },
    { id: 'physical', name: 'Physical Activities', description: 'Skating, Basketball, Hiking, Yoga' },
    { id: 'tech', name: 'Tech Skills', description: 'AI, Coding, Robotics, Digital Literacy' },
    { id: 'life-skills', name: 'Life Skills', description: 'Leadership, Entrepreneurship, Communication' },
  ];

  const handleProgramToggle = (programId: string) => {
    setSelectedPrograms(prev => 
      prev.includes(programId) 
        ? prev.filter(id => id !== programId)
        : [...prev, programId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { ...formData, programs: selectedPrograms });
  };

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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Enroll Your Child at <span className="gradient-text">Gurukul Studio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your child's amazing journey of growth, learning, and discovery. 
              Join our family of happy learners today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Enrollment Form</CardTitle>
                    <p className="text-muted-foreground">
                      Please fill out the form below to enroll your child in our programs.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Child Information */}
                      <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold flex items-center">
                          <Users className="w-5 h-5 mr-2 text-kid-purple" />
                          Child Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="childName">Child's Full Name *</Label>
                            <Input
                              id="childName"
                              name="childName"
                              value={formData.childName}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="childAge">Child's Age *</Label>
                            <Input
                              id="childAge"
                              name="childAge"
                              type="number"
                              min="2"
                              max="18"
                              value={formData.childAge}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Parent Information */}
                      <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold flex items-center">
                          <User className="w-5 h-5 mr-2 text-kid-teal" />
                          Parent/Guardian Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                            <Input
                              id="parentName"
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1"
                            rows={3}
                          />
                        </div>
                      </div>

                      {/* Program Selection */}
                      <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 text-kid-pink" />
                          Select Programs
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {programs.map((program) => (
                            <div key={program.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                              <Checkbox
                                id={program.id}
                                checked={selectedPrograms.includes(program.id)}
                                onCheckedChange={() => handleProgramToggle(program.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <Label htmlFor={program.id} className="font-medium cursor-pointer">
                                  {program.name}
                                </Label>
                                <p className="text-sm text-muted-foreground">{program.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Message */}
                      <div>
                        <Label htmlFor="message">Additional Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your child's interests, any special requirements, or questions you have..."
                          className="mt-1"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full group">
                        Submit Enrollment
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-kid-teal" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">9702024403 / 01-4547265</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-kid-purple" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">gurukulstudio11@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-kid-pink" />
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-sm text-muted-foreground">Schedule a tour of our facilities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-kid-teal/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-kid-teal">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Application Review</p>
                        <p className="text-sm text-muted-foreground">We'll review your application within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-kid-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-kid-purple">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Personal Consultation</p>
                        <p className="text-sm text-muted-foreground">Schedule a meeting to discuss your child's needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-kid-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-kid-pink">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Welcome to Gurukul!</p>
                        <p className="text-sm text-muted-foreground">Begin your child's amazing learning journey</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}