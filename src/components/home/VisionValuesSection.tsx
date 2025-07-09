'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { visionValues } from '@/data/homeData';

export default function VisionValuesSection() {
  return (
    <>
      {/* Mobile Layout */}
      <section className="md:hidden relative py-8 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Minimal background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-sm mx-auto">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text font-bold text-xl mb-2">
              🌟 OUR VISION & VALUES
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Horizontal Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {visionValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-3 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 flex items-center justify-center text-sm font-bold text-black shadow-lg mx-auto mb-2">
                    {value.icon}
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{value.title}</h3>
                  <p className="text-gray-300 text-xs leading-tight">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact Vision Statement */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="p-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10">
              <p className="text-gray-300 text-xs italic">
                "We believe in pushing boundaries to create digital experiences that anticipate tomorrow's opportunities."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="hidden md:block relative py-16 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Holographic Background Effects */}
        <div className="absolute inset-0 opacity-40">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Animated lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Hexagonal pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpolygon points=\"20,0 32,12 32,28 20,40 8,28 8,12\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-blue-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  🌟 OUR VISION & VALUES 🌟
                </h2>
                <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6 font-light">
              The principles that drive our innovation and excellence
            </p>
          </motion.div>

          {/* Vision Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {visionValues.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-400/20 h-full">
                  
                  {/* Holographic glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* 3D-style shimmer */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Holographic icon container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 flex items-center justify-center text-2xl font-bold text-black shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300">
                        {value.icon}
                      </div>
                      {/* Glowing orbital ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: '3s' }}></div>
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Vision Statement */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative inline-block p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 rounded-2xl"></div>
              <p className="relative text-gray-300 text-sm md:text-base font-light italic">
                "We believe in pushing the boundaries of what's possible, creating digital experiences that not only meet today's needs but anticipate tomorrow's opportunities."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
