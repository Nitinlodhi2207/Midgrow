'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { processSteps } from '@/data/homeData';

interface GetStartedProcessSectionProps {
  onConsultationClick: () => void;
}

export default function GetStartedProcessSection({ onConsultationClick }: GetStartedProcessSectionProps) {
  return (
    <>
      {/* Mobile Layout - Compact Horizontal */}
      <section className="md:hidden relative py-8 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 blur-lg animate-pulse"></div>
              <div className="relative px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-green-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text font-bold text-lg">
                  ⚡ GET STARTED PROCESS ⚡
                </h2>
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-3 font-light">
              4 simple steps to transformation
            </p>
          </motion.div>

          {/* Horizontal Process Steps */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-3 px-2" style={{ minWidth: 'max-content' }}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-44 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 flex items-center justify-center text-sm font-bold text-black">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-xs mb-1 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {step.description.length > 50 ? `${step.description.slice(0, 50)}...` : step.description}
                    </p>
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
              onClick={onConsultationClick}
              className="px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-black font-bold rounded-full text-sm shadow-lg"
            >
              🚀 Start Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Desktop Layout - Current Design */}
      <section className="hidden md:block relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Sci-Fi Background Effects */}
        <div className="absolute inset-0 opacity-30">
          {/* Circuit-like lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          </div>
          
          {/* Glowing nodes */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"15\" cy=\"15\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-green-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  ⚡ GET STARTED PROCESS ⚡
                </h2>
                <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6 font-light">
              Your journey to digital transformation in 4 simple steps
            </p>
          </motion.div>

          {/* Process Steps - Horizontal on Desktop */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-green-400/20 min-w-[200px] max-w-[280px]">
                    
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Circuit-like connecting lines */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Step number with neon glow */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 flex items-center justify-center text-xl font-bold text-black shadow-lg group-hover:shadow-green-400/50 transition-all duration-300">
                          {index + 1}
                        </div>
                        {/* Orbital ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: '3s' }}></div>
                        {/* Pulsing glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative text-center">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {step.description}
                      </p>
                      
                      {/* Animated underline */}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Neon Arrow Between Steps */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="flex items-center mx-4">
                      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="text-green-400 animate-pulse">
                        <path d="M8 20h24m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-2xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-8">
                  Join forward-thinking businesses who trust us to transform their digital presence
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <button 
                    onClick={onConsultationClick}
                    className="group relative px-8 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-black font-bold rounded-full hover:from-green-300 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-400/40 overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    <span className="relative">🚀 Start Free Consultation</span>
                  </button>
                  
                  <button className="group relative px-8 py-4 bg-transparent border-2 border-green-400/50 text-green-400 font-bold rounded-full hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 w-full sm:w-auto">
                    <span className="relative">📋 View All Services</span>
                  </button>
                </div>
                
                {/* Features list */}
                <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                    No Setup Fees
                  </span>
                  <span className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                    Free Consultation
                  </span>
                  <span className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                    Quick Response
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}