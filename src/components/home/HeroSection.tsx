'use client'

import React from 'react';
import { floatingServices } from '@/data/homeData';

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

export default function HeroSection({
  typedText,
  mousePosition,
  isInteracting,
  isHydrated,
  touchRipples,
  digitalParticles,
  burstEffects,
  onServiceClick,
  onGetStartedClick
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Burst Effects for Service Interactions */}
      {burstEffects.map((burst) => (
        <div
          key={burst.id}
          className="fixed pointer-events-none z-60"
          style={{
            left: burst.x - 20,
            top: burst.y - 20,
          }}
        >
          <div className="relative">
            {[...Array(8)].map((_, i) => (
              <div
                key={`burst-${burst.id}-particle-${i}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-burst-particle"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-30px)`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Futuristic Digital World Background */}
      <div className="absolute inset-0">
        {/* Animated Digital Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: `${50 + Math.abs(mousePosition.x) * 20}px ${50 + Math.abs(mousePosition.y) * 20}px`,
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              transition: 'all 0.3s ease-out'
            }}
          ></div>
        </div>

        {/* Animated Digital Circuits */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M20,20 L180,20 L180,50 L150,50 L150,80 L180,80 L180,180 L20,180 L20,150 L50,150 L50,120 L20,120 Z"
                fill="none"
                stroke="rgba(236, 72, 153, 0.5)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <circle cx="20" cy="20" r="3" fill="rgba(236, 72, 153, 0.8)" className="animate-pulse" />
              <circle cx="180" cy="180" r="3" fill="rgba(139, 92, 246, 0.8)" className="animate-pulse" />
              <circle cx="50" cy="150" r="2" fill="rgba(34, 211, 238, 0.8)" className="animate-pulse" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" filter="url(#glow)" 
                style={{
                  transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px) scale(${1 + Math.abs(mousePosition.x) * 0.1})`,
                  transition: 'transform 0.3s ease-out'
                }} />
        </svg>

        {/* Floating Data Streams */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`data-stream-${i}`}
              className="absolute opacity-40"
              style={{
                left: `${5 + (i * 6)}%`,
                top: `${10 + (i * 4)}%`,
                transform: `
                  translate3d(
                    ${mousePosition.x * (20 + i * 3)}px,
                    ${mousePosition.y * (15 + i * 2)}px,
                    0
                  )
                  rotate(${mousePosition.x * (10 + i * 2)}deg)
                `,
                transition: 'transform 0.4s ease-out',
                animationDelay: `${i * 0.1}s`
              }}
            >
              <div className="flex space-x-1">
                {[...Array(8)].map((_, j) => (
                  <div
                    key={`data-stream-particle-${i}-${j}`}
                    className={`w-2 h-2 rounded-full ${
                      ['bg-purple-400', 'bg-emerald-400', 'bg-pink-400', 'bg-cyan-400'][j % 4]
                    }`}
                    style={{
                      opacity: isHydrated ? ((i + j) % 3 === 0 ? 1 : 0.3) : 0.3,
                      animationDelay: `${(i + j) * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Touch Ripples */}
        {isInteracting && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute w-32 h-32 border-4 border-cyan-400 rounded-full animate-ping"
              style={{
                left: `${(mousePosition.x + 1) * 50}%`,
                top: `${(mousePosition.y + 1) * 50}%`,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
            <div 
              className="absolute w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${(mousePosition.x + 1) * 50}%`,
                top: `${(mousePosition.y + 1) * 50}%`,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          </div>
        )}

        {/* Touch Ripple Effects */}
        {touchRipples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute touch-ripple"
            style={{
              left: ripple.x - 50,
              top: ripple.y - 50,
              width: 100,
              height: 100,
            }}
          ></div>
        ))}

        {/* Digital Particles */}
        {digitalParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute touch-burst"
            style={{
              left: particle.x,
              top: particle.y,
              '--dx': `${particle.vx * 50}px`,
              '--dy': `${particle.vy * 50}px`,
            } as React.CSSProperties & { '--dx': string; '--dy': string }}
          ></div>
        ))}
      </div>
      
      {/* Mobile-Optimized Interactive 3D Floating Service Containers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full relative">
          
          {/* Typing Animation - Top Section */}
          <div 
            className="absolute z-30 text-center w-full px-4"
            style={{
              top: 'clamp(15%, 15vh, 120px)',
              transform: `
                translate3d(${mousePosition.x * 3}px, ${mousePosition.y * 2}px, 0)
              `,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="relative h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 overflow-hidden mb-2">
              <div className="typing-animation">
                <span 
                  className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold"
                  style={{
                    transform: `rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {typedText}
                </span>
              </div>
            </div>
            <p className="text-white/80 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              Your Business Digitally
            </p>
          </div>

          {/* Digital Solutions Container - Central */}
          <div 
            className="absolute z-20"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="digital-solutions-container rounded-xl xs:rounded-2xl sm:rounded-3xl backdrop-blur-lg w-48 h-20 xs:w-52 xs:h-22 sm:w-64 sm:h-28 md:w-72 md:h-32 lg:w-80 lg:h-36">
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent mb-1">
                    DIGITAL
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90">
                    SOLUTIONS
                  </p>
                  <div className="flex justify-center gap-1 xs:gap-1.5 sm:gap-2 mt-1 xs:mt-1.5 sm:mt-2">
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transform Your Business Section */}
          <div 
            className="absolute z-30 text-center w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md px-4"
            style={{
              top: 'calc(50% + 60px)',
              left: '50%',
              transform: `
                translateX(-50%)
                translate3d(${mousePosition.x * 2}px, ${mousePosition.y * 1}px, 0)
              `,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-6 space-y-1 xs:space-y-1.5 sm:space-y-2">
              <h3 className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 mb-1 xs:mb-1.5 sm:mb-2">
                Transform Your Business Today
              </h3>
              <div className="flex flex-wrap justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-4 text-xs sm:text-sm lg:text-base text-white/70">
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="hidden xs:inline">AI Solutions</span>
                  <span className="xs:hidden">AI</span>
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="hidden xs:inline">Digital</span>
                  <span className="xs:hidden">Web</span>
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="hidden xs:inline">Analytics</span>
                  <span className="xs:hidden">Data</span>
                </span>
              </div>
            </div>

            {/* Get Started Button */}
            <button 
              onClick={onGetStartedClick}
              className="get-started-button group relative overflow-hidden text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl font-semibold text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu w-full max-w-[180px] xs:max-w-[220px] sm:w-auto"
              style={{
                transform: `
                  perspective(1000px) 
                  rotateX(${mousePosition.y * 1}deg) 
                  rotateY(${mousePosition.x * 1}deg) 
                  scale(${1 + Math.abs(mousePosition.x) * 0.02})
                `,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/20 rounded-lg xs:rounded-xl sm:rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-cyan-400/20 rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3">
                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
                <span className="hidden xs:inline">Get Started</span>
                <span className="xs:hidden">Start</span>
                <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300"></div>
              </span>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </button>
          </div>

          {/* Mobile-Optimized Service Containers */}
          {floatingServices.map((service, index) => {
            const isLeftSide = index < 3;
            const sideIndex = isLeftSide ? index : index - 3;
            
            let mobileClasses, desktopPosition;
            
            if (isLeftSide) {
              mobileClasses = 'left-[2%] xs:left-[3%] sm:left-[4%] md:left-[5%] lg:left-[6%] xl:left-[8%]';
              desktopPosition = {
                top: `${10 + sideIndex * 28}%`,
                rotation: 3 + sideIndex * 2
              };
            } else {
              mobileClasses = 'right-[2%] xs:right-[3%] sm:right-[4%] md:right-[5%] lg:right-[6%] xl:right-[8%]';
              desktopPosition = {
                top: `${10 + sideIndex * 28}%`,
                rotation: -3 - sideIndex * 2
              };
            }
            
            return (
              <div
                key={service.id}
                className={`absolute pointer-events-auto group cursor-pointer z-10 ${mobileClasses}`}
                style={{
                  top: desktopPosition.top,
                  transform: `
                    translate3d(${mousePosition.x * (2 + index * 0.3)}px, ${mousePosition.y * (1.5 + index * 0.3)}px, 0)
                    rotateZ(${desktopPosition.rotation}deg)
                    scale(${1 + Math.abs(mousePosition.x) * 0.005})
                  `,
                  transition: 'transform 0.3s ease-out',
                  animationDelay: `${index * 0.2}s`
                }}
                onClick={(e) => onServiceClick(service, e)}
              >
                <div className={`relative w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0.5 border border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl animate-pulse"></div>
                  <div className="absolute inset-1 border border-purple-300/30 rounded-md sm:rounded-lg md:rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 text-center">
                    <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1 xs:mb-1.5 sm:mb-2 md:mb-2 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg leading-tight drop-shadow-md">
                      <span className="block xs:hidden">{service.name.split(' ')[0]}</span>
                      <span className="hidden xs:block sm:hidden text-[10px] leading-tight">
                        {service.name.length > 8 ? service.name.split(' ')[0] : service.name}
                      </span>
                      <span className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
                        {service.name}
                      </span>
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-cyan-400/0 group-hover:from-purple-400/15 group-hover:via-pink-400/15 group-hover:to-cyan-400/15 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Bottom Gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, 
            rgba(255, 255, 255, ${isHydrated ? 0.8 + Math.abs(mousePosition.y) * 0.1 : 0.8}),
            rgba(255, 255, 255, ${isHydrated ? 0.6 + Math.abs(mousePosition.y) * 0.05 : 0.6}), 
            transparent
          )`,
          transition: 'background 0.3s ease-out'
        }}
      ></div>
    </section>
  );
}
