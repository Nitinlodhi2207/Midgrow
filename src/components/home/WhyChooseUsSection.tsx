'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsPoints } from '@/data/homeData';

interface WhyChooseUsSectionProps {
  onGetStartedClick: () => void;
}

export default function WhyChooseUsSection({ onGetStartedClick }: WhyChooseUsSectionProps) {
  return (
    <>
      {/* Mobile Layout */}
      <section className="md:hidden relative py-8 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Minimal background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-sm mx-auto">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text font-bold text-xl mb-2">
              💎 WHY CHOOSE MIDGROW
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Horizontal Scroll Cards */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4" style={{ width: `${whyChooseUsPoints.length * 280}px` }}>
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Horizontal layout */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 flex items-center justify-center text-sm font-bold text-black shadow-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{point.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                    {point.description}
                  </p>
                  <div className="space-y-1">
                    {point.features.slice(0, 2).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compact CTA */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={onGetStartedClick}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black font-bold rounded-full text-sm shadow-lg"
            >
              🚀 Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="hidden md:block relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 opacity-30">
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.02%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-cyan-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  💎 WHY CHOOSE MIDGROW 💎
                </h2>
                <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6 font-light">
              Experience the future of digital transformation with our innovative approach
            </p>
          </motion.div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-400/20">

                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Icon with neon glow */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 flex items-center justify-center text-2xl font-bold text-black shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                        {point.icon}
                      </div>
                      {/* Glowing ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {point.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2">
                      {point.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 group-hover:animate-ping"></div>
                          <span className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={onGetStartedClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black font-bold rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/40 overflow-hidden"
            >
              {/* Shining background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              <span className="relative flex items-center space-x-2">
                <span>🚀 Start Your Digital Journey</span>
              </span>

              {/* Sparkling effects */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
