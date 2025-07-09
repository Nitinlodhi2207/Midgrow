'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { getPricingPlans, PricingPlan } from '@/lib/supabase';

interface PricingSectionProps {
  onPlanSelect: (planName: string) => void;
  onCustomQuote: () => void;
}

export default function PricingSection({ onPlanSelect, onCustomQuote }: PricingSectionProps) {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch pricing plans from Supabase
  useEffect(() => {
    async function fetchPricingPlans() {
      try {
        const plansData = await getPricingPlans();
        setPricingPlans(plansData || []);
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
        setPricingPlans([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPricingPlans();
  }, []);

  if (loading) {
    return (
      <section className="relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-blue-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  💰 PRICING PLANS 💰
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <>
      {/* Mobile Layout - Compact Horizontal Cards */}
      <section className="md:hidden relative py-8 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse"></div>
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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-lg animate-pulse"></div>
              <div className="relative px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-blue-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-bold text-lg">
                  💰 PRICING PLANS 💰
                </h2>
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-3 font-light">
              Choose your perfect plan
            </p>
          </motion.div>

          {/* Horizontal Pricing Cards */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-3 px-2" style={{ minWidth: 'max-content' }}>
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-48 p-4 backdrop-blur-xl rounded-xl border transition-all duration-300 ${
                    plan.is_popular 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/50' 
                      : 'bg-white/5 border-white/10'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Popular Badge */}
                  {plan.is_popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold text-center mb-3">
                      🔥 POPULAR
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className="text-center mb-4">
                    <h3 className={`text-sm font-bold mb-2 ${
                      plan.is_popular ? 'text-blue-300' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-lg font-bold ${
                        plan.is_popular ? 'text-blue-300' : 'text-purple-300'
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-xs">
                      {plan.description.length > 40 ? `${plan.description.slice(0, 40)}...` : plan.description}
                    </p>
                  </div>
                  
                  {/* Compact Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {plan.features.slice(0, 3).map((feature: string, fIndex: number) => (
                        <li key={fIndex} className="flex items-start text-xs">
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0 ${
                            plan.is_popular 
                              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                              : 'bg-gradient-to-r from-purple-400 to-pink-400'
                          }`}>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                          </div>
                          <span className="text-gray-300 leading-tight">
                            {feature.length > 25 ? `${feature.slice(0, 25)}...` : feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => onPlanSelect(`${plan.name} Plan`)}
                    className={`w-full py-2 px-3 font-bold rounded-lg transition-all duration-300 text-xs ${
                      plan.is_popular
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-black hover:from-blue-300 hover:to-purple-300'
                        : 'bg-gradient-to-r from-purple-400 to-pink-400 text-black hover:from-purple-300 hover:to-pink-300'
                    }`}
                  >
                    Get Started
                  </button>
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
            <div className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 mb-4">
              <p className="text-gray-300 text-xs mb-2">
                🎯 <span className="text-white font-bold">50% OFF</span> first month!
              </p>
              <button 
                onClick={onCustomQuote}
                className="text-blue-400 text-xs font-bold"
              >
                Need Custom? Get Quote →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop Layout - Current Design */}
      <section className="hidden md:block relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 opacity-30">
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Money/currency symbols floating */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-white/5 text-2xl font-bold"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite alternate`,
                }}
              >
                {['$', '€', '£', '¥'][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M20 20l10-10v5h5v10h-5v5l-10-10z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-blue-400/30">
                <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl">
                  💰 PRICING PLANS 💰
                </h2>
                <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6 font-light">
              Choose the perfect plan to accelerate your digital transformation
            </p>
          </motion.div>

          {/* Pricing Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`relative p-6 md:p-8 backdrop-blur-xl rounded-2xl border transition-all duration-500 overflow-hidden group-hover:shadow-2xl min-h-[500px] flex flex-col ${
                  plan.is_popular 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/50 shadow-blue-400/20' 
                    : 'bg-white/5 border-white/10 hover:border-purple-400/50 group-hover:shadow-purple-400/20'
                }`}>
                  
                  {/* Most Popular Badge */}
                  {plan.is_popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 MOST POPULAR
                    </div>
                  )}
                  
                  {/* Glowing background effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    plan.is_popular 
                      ? 'bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20' 
                      : 'bg-gradient-to-br from-purple-400/10 via-blue-400/10 to-pink-400/10'
                  }`}></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Plan Header */}
                  <div className="relative text-center mb-8">
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
                      plan.is_popular ? 'text-blue-300' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-center mb-4">
                      <span className={`text-3xl md:text-4xl font-bold ${
                        plan.is_popular ? 'text-blue-300' : 'text-purple-300'
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-sm md:text-base ml-2">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm md:text-base mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className={`w-0 h-0.5 mx-auto group-hover:w-full transition-all duration-500 rounded-full ${
                      plan.is_popular 
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                        : 'bg-gradient-to-r from-purple-400 to-pink-400'
                    }`}></div>
                  </div>
                  
                  {/* Features List */}
                  <div className="relative flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature: string, fIndex: number) => (
                        <li key={fIndex} className="flex items-start">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 ${
                            plan.is_popular 
                              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                              : 'bg-gradient-to-r from-purple-400 to-pink-400'
                          }`}>
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => onPlanSelect(`${plan.name} Plan`)}
                    className={`relative w-full py-3 px-6 font-bold rounded-full transition-all duration-300 shadow-lg overflow-hidden group ${
                      plan.is_popular
                        ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-black hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 shadow-blue-400/40 hover:shadow-2xl hover:shadow-blue-400/60'
                        : 'bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-black hover:from-purple-300 hover:via-pink-400 hover:to-purple-400 shadow-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/60'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    <span className="relative">🚀 Get Started</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl"></div>
              <div className="relative">
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  🎯 <strong className="text-white">New Business Special:</strong> First month 50% off on any plan!
                </p>
                <button 
                  onClick={onCustomQuote}
                  className="group relative px-6 py-3 bg-transparent border-2 border-blue-400/50 text-blue-400 font-bold rounded-full hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">✨ Need Custom Solution? Get Quote →</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>
    </>
  );
}
