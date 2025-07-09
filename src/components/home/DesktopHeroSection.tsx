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

const DesktopHeroSection = () => {
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
    }
  ];

  const navLinks = ["Home", "Services", "Solutions", "Blog", "Contact"];

  return (
    <section className="hidden lg:block relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/desktop_herosection.jpg')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {/* Additional Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-60">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-32 left-32 text-cyan-400 opacity-60"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode size={40} />
        </motion.div>
        <motion.div 
          className="absolute top-48 right-48 text-pink-400 opacity-60"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLightbulb size={35} />
        </motion.div>
        <motion.div 
          className="absolute bottom-48 left-48 text-purple-400 opacity-60"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChartLine size={30} />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 text-emerald-400 opacity-60"
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaPalette size={25} />
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        className="relative z-30 flex items-center justify-between px-8 py-4 max-w-7xl mx-auto bg-black/20 backdrop-blur-md rounded-2xl mt-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          MIDGROW
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-300 font-medium relative group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {link}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Get Quote
        </motion.button>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 font-sans" style={{ fontFamily: 'Sora, Inter, Orbitron, sans-serif' }}>
              <motion.span 
                className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Revolutionize
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your Business
              </motion.span>
              <div className="relative h-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[currentWordIndex]}
                    className="absolute bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg"
                    style={{
                      textShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 223, 0, 0.3), 0 0 60px rgba(255, 230, 0, 0.2)',
                      filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))'
                    }}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      textShadow: [
                        '0 0 20px rgba(255, 215, 0, 0.5)',
                        '0 0 30px rgba(255, 223, 0, 0.7)',
                        '0 0 25px rgba(255, 230, 0, 0.6)',
                        '0 0 20px rgba(255, 215, 0, 0.5)'
                      ]
                    }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
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
            className="text-lg lg:text-xl text-gray-300 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Your Business Today
          </motion.p>

          {/* Feature Line */}
          <motion.p 
            className="text-xs lg:text-sm text-cyan-400 font-medium tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI • Web • Data
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mt-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 40, rotateY: 30 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Background with Enhanced Glassmorphism */}
              <div className="relative p-4 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden">
                {/* Animated Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                <div className="relative mb-3 flex justify-center">
                  <motion.div 
                    className={`p-3 rounded-full bg-gradient-to-r ${service.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.3)",
                        "0 0 30px rgba(59, 130, 246, 0.4)",
                        "0 0 20px rgba(6, 182, 212, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <service.icon size={24} className="text-white" />
                  </motion.div>
                </div>
                
                {/* Content with Stagger Animation */}
                <div className="relative text-center">
                  <motion.h3 
                    className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DesktopHeroSection;
