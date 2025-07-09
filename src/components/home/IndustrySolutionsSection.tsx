'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getSectors, Sector } from '@/lib/supabase';
import { FaArrowRight } from 'react-icons/fa';

interface IndustrySolutionsSectionProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  sectorsCarouselRef: React.RefObject<HTMLDivElement>;
  isHydrated: boolean;
  onIndustryConsultation: (sector: Sector) => void;
}

const IndustrySolutionsSection = ({
  currentSlide,
  setCurrentSlide,
  sectorsCarouselRef,
  isHydrated,
  onIndustryConsultation
}: IndustrySolutionsSectionProps) => {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const sectorsData = await getSectors();
        setSectors(sectorsData || []);
      } catch (error) {
        console.error('Error fetching sectors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSectors();
  }, []);

  const handleSectorClick = (sector: Sector) => {
    // Navigate to sector detail page or open consultation
    onIndustryConsultation(sector);
  };

  if (isLoading) {
    return (
      <section className="relative py-12 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-32">
            <motion.div
              className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 px-4 bg-black overflow-hidden">
      {/* Dark Night Sky Background with Stars */}
      <div className="absolute inset-0">
        {/* Main dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        
        {/* Animated stars scattered across the background */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
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
        
        {/* Subtle moving light beams */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-conic from-transparent via-white/5 to-transparent animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Unique Section Title with Different Styling */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            {/* Glowing border effect around title */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 blur-xl animate-pulse"></div>
            
            <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-yellow-400/30">
              <h2 className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                ✨ INDUSTRIES WE TRANSFORM ✨
              </h2>
              <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6 font-light">
            Discover our specialized digital solutions across various industries
          </p>
        </motion.div>

        {/* Industries Grid with Shining Diamond-Style Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSectorClick(sector)}
            >
              <div className="relative p-4 md:p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-gray-700 hover:border-yellow-400/60 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-yellow-400/20">
                
                {/* Diamond-like shining effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Shining light sweep effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
                </div>
                
                {/* Sparkling dots around the card */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.6s' }}></div>
                
                {/* Icon with glowing effect */}
                <div className="relative mb-3 md:mb-4 flex justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 flex items-center justify-center text-lg md:text-xl font-bold text-black shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300">
                      {sector.icon}
                    </div>
                    {/* Glowing ring around icon */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/50 to-orange-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md animate-pulse"></div>
                  </div>
                </div>
                
                {/* Content with enhanced styling */}
                <div className="relative text-center">
                  <h3 className="font-bold text-white text-xs md:text-sm leading-tight group-hover:text-yellow-300 transition-colors duration-300 mb-2">
                    {sector.name}
                  </h3>
                  
                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
                  
                  {/* Subtle glow text effect */}
                  <div className="absolute inset-0 text-xs md:text-sm font-bold text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors duration-300 blur-sm">
                    {sector.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA with Different Styling */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-bold rounded-full hover:from-yellow-300 hover:via-orange-300 hover:to-red-300 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/40 overflow-hidden">
            {/* Shining background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-orange-400/50 to-red-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            
            <span className="relative flex items-center space-x-2">
              <span>🚀 Explore All Industries</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
            </span>
            
            {/* Sparkling effect */}
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
