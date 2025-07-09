'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getFeaturedTestimonials, Testimonial } from '@/lib/supabase';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const testimonialsData = await getFeaturedTestimonials(3);
        setTestimonials(testimonialsData || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (loading) {
    return (
      <section className="relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-pink-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  💬 CLIENT TESTIMONIALS 💬
                </h2>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <motion.div
                className="w-8 h-8 border-2 border-pink-400 border-t-transparent rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* Mobile Layout - Compact Single Card */}
      <section className="md:hidden relative py-8 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-sm mx-auto">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-lg animate-pulse"></div>
              <div className="relative px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-pink-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text font-bold text-lg">
                  💬 CLIENT TESTIMONIALS 💬
                </h2>
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-3 font-light">
              Real transformation stories
            </p>
          </motion.div>

          {/* Compact Testimonial Card */}
          <motion.div
            key={currentIndex}
            className="relative p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-blue-400/10 opacity-50 rounded-xl"></div>
            
            {/* Quote */}
            <div className="relative">
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center text-lg font-bold text-black">
                  "
                </div>
              </div>
              
              <blockquote className="text-white text-sm leading-relaxed mb-4 text-center">
                {currentTestimonial.testimonial.slice(0, 120)}...
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < (currentTestimonial.rating || 0) ? 'text-yellow-400' : 'text-gray-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Client info */}
              <div className="text-center">
                <div className="font-semibold text-white text-sm mb-1">
                  {currentTestimonial.client_name}
                </div>
                <div className="text-pink-300 text-xs">
                  {currentTestimonial.client_position}
                </div>
                <div className="text-gray-400 text-xs">
                  {currentTestimonial.client_company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact Navigation dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full' 
                      : 'w-2 h-2 bg-white/20 rounded-full hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Desktop Layout - Current Design */}
      <section className="hidden md:block relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 opacity-30">
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          
          {/* Circuit pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3Cpath d=\"M30 0v60M0 30h60\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-pink-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  💬 CLIENT TESTIMONIALS 💬
                </h2>
                <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6 font-light">
              Real stories from businesses we've helped transform
            </p>
          </motion.div>
          
          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              className="relative p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-blue-400/10 opacity-50"></div>
              
              {/* Floating quote decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Quote icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center text-3xl font-bold text-black shadow-lg mx-auto">
                  "
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/50 to-blue-400/50 opacity-50 blur-md animate-pulse"></div>
              </div>
              
              {/* Testimonial content */}
              <div className="relative text-center">
                <blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8">
                  {currentTestimonial.testimonial}
                </blockquote>
                
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < (currentTestimonial.rating || 0) ? 'text-yellow-400' : 'text-gray-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-300">
                    {currentTestimonial.rating || 0}/5
                  </span>
                </div>
                
                {/* Client info */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-white text-lg mb-1">
                      {currentTestimonial.client_name}
                    </div>
                    <div className="text-pink-300 font-medium text-sm">
                      {currentTestimonial.client_position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {currentTestimonial.client_company}
                    </div>
                  </div>
                  
                  {/* Service type badge */}
                  <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-400/30">
                    {currentTestimonial.service_type}
                  </div>
                </div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-pulse"></div>
            </motion.div>
          </div>
          
          {/* Navigation dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-400/40' 
                      : 'w-3 h-3 bg-white/20 rounded-full hover:bg-white/40 hover:scale-110'
                  }`}
                >
                  {index === currentIndex && (
                    <div className="w-full h-full bg-white/30 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
