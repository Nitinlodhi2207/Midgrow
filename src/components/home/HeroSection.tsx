'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaChartLine, 
  FaSearch, 
  FaPalette, 
  FaLightbulb 
} from 'react-icons/fa';

interface HeroSectionProps {
  typedText: string;
  mousePosition: { x: number; y: number };
  isInteracting: boolean;
  isHydrated: boolean;
  touchRipples: Array<{id: number, x: number, y: number}>;
  digitalParticles: Array<{id: number, x: number, y: number, vx: number, vy: number}>;
  burstEffects: Array<{id: number, x: number, y: number}>;
  onServiceClick: (service: any, event: React.MouseEvent) => void;
  onGetStartedClick: () => void;
}

const MobileHeroSection = ({
  typedText,
  mousePosition,
  isInteracting,
  isHydrated,
  touchRipples,
  digitalParticles,
  burstEffects,
  onServiceClick,
  onGetStartedClick
}: HeroSectionProps) => {
  const dynamicWords = ["Digitally", "Intelligently", "Automatically", "Seamlessly"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2700); // 2.7 seconds

    return () => clearInterval(interval);
  }, [dynamicWords.length]);
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Build modern, responsive websites that drive results",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: FaMobile,
      title: "App Development", 
      description: "Create powerful mobile applications for iOS and Android",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: FaChartLine,
      title: "Digital Marketing",
      description: "Boost your online presence and reach your target audience",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: FaSearch,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: FaPalette,
      title: "Branding",
      description: "Create compelling brand identities that resonate",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: FaLightbulb,
      title: "Consulting",
      description: "Strategic guidance to accelerate your digital transformation",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const navLinks = ["Home", "Services", "Solutions", "Blog", "Contact"];

  return (
    <section className="lg:hidden relative min-h-screen text-white overflow-hidden">
      {/* Mobile Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/mobile_hero_section.svg')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {/* Additional Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-50">
        {/* Glowing Orbs - Mobile optimized */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-violet-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles - Mobile optimized */}
        <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Icons - Mobile optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-24 left-8 text-cyan-400 opacity-50"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode size={24} />
        </motion.div>
        <motion.div 
          className="absolute top-32 right-12 text-pink-400 opacity-50"
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLightbulb size={20} />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-12 text-purple-400 opacity-50"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChartLine size={18} />
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col justify-between h-screen px-4">
        {/* Top Section - Headline and Text */}
        <div className="flex-1 flex flex-col justify-start pt-4 max-w-sm mx-auto text-center">
          {/* Main Headline */}
          <motion.div 
            className="mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-1 font-sans" style={{ fontFamily: 'Sora, Inter, Orbitron, sans-serif' }}>
              <motion.span 
                className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Revolutionize
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your Business
              </motion.span>
              <div className="relative h-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[currentWordIndex]}
                    className="absolute bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg"
                    style={{
                      textShadow: '0 0 15px rgba(255, 215, 0, 0.5), 0 0 30px rgba(255, 223, 0, 0.3), 0 0 45px rgba(255, 230, 0, 0.2)',
                      filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.7))'
                    }}
                    initial={{ opacity: 0, y: 15, rotateX: -90 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      textShadow: [
                        '0 0 15px rgba(255, 215, 0, 0.5)',
                        '0 0 20px rgba(255, 223, 0, 0.7)',
                        '0 0 18px rgba(255, 230, 0, 0.6)',
                        '0 0 15px rgba(255, 215, 0, 0.5)'
                      ]
                    }}
                    exit={{ opacity: 0, y: -15, rotateX: 90 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeInOut",
                      textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            className="text-xs sm:text-sm text-gray-300 mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Your Business Today
          </motion.p>

          {/* Feature Line */}
          <motion.p 
            className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI • Web • Data
          </motion.p>
        </div>

        {/* Bottom Section - Service Cards */}
        <div className="pb-4">
          {/* Mobile Service Cards */}
          <motion.div 
            className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30, rotateY: 20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={(e) => onServiceClick(service, e)}
            >
              {/* Compact Card Background with Enhanced Glassmorphism */}
              <div className="relative p-2 bg-black/30 backdrop-blur-xl rounded-lg border border-white/20 shadow-xl group-hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden">
                {/* Animated Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"
                  initial={{ translateX: "-100%" }}
                  animate={{ translateX: "100%" }}
                  transition={{ duration: 2, delay: 2 + index * 0.2, repeat: Infinity, repeatDelay: 5 }}
                />
                
                {/* Icon with Pulse Animation */}
                <div className="relative mb-1 flex justify-center">
                  <motion.div 
                    className={`p-1.5 rounded-full bg-gradient-to-r ${service.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(6, 182, 212, 0.3)",
                        "0 0 15px rgba(59, 130, 246, 0.4)",
                        "0 0 10px rgba(6, 182, 212, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <service.icon size={14} className="text-white" />
                  </motion.div>
                </div>
                
                {/* Service Name Only */}
                <div className="relative text-center">
                  <motion.h3 
                    className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>

      {/* Touch Ripples */}
      {touchRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-12 h-12 bg-cyan-400/30 rounded-full"></div>
        </motion.div>
      ))}

      {/* Burst Effects */}
      {burstEffects.map((burst) => (
        <div
          key={burst.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: burst.x - 15,
            top: burst.y - 15,
          }}
        >
          <div className="relative">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 30,
                  y: Math.sin(i * 60 * Math.PI / 180) * 30,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileHeroSection;
