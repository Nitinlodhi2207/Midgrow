/**
 * SectionHeader - App-like section headers with vibrant gradients and animations
 * 
 * Features:
 * - Gradient backgrounds with customizable colors
 * - Animated floating elements and patterns
 * - Responsive design for all screen sizes
 * - Glass-morphism effects with backdrop blur
 * - SVG wave bottom border for seamless integration
 * - Icon with glow effects
 * - Highlighted text with special styling
 * - Compact mode for minimal height
 * 
 * Usage Examples:
 * 
 * 1. Using QuickSectionHeader (recommended):
 * <QuickSectionHeader section="services" />
 * <QuickSectionHeader section="services" compact={true} />
 * 
 * 2. Using SectionHeader directly:
 * <SectionHeader
 *   title="Custom Title"
 *   subtitle="Custom Subtitle"
 *   highlight="Title"
 *   icon="🚀"
 *   gradient="from-blue-600 to-purple-600"
 *   description="Your custom description here"
 *   compact={true}
 * />
 */

'use client'

import React from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  highlight?: string
  icon?: string
  gradient?: string
  textColor?: string
  description?: string
  showPattern?: boolean
  compact?: boolean
}

const SectionHeader = ({
  title,
  subtitle,
  highlight,
  icon = '✨',
  gradient = 'from-slate-900 via-blue-900 to-indigo-900',
  textColor = 'text-white',
  description,
  showPattern = true,
  compact = false
}: SectionHeaderProps) => {
  if (compact) {
    // Compact version - futuristic design, minimal height, no stickers
    return (
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-lg border-b border-cyan-400/30">
          <div className="relative px-4 sm:px-6 lg:px-8 py-3">
            {/* Futuristic accent line */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-0 right-1/4 w-24 h-24 bg-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                {/* Futuristic icon container */}
                <div className="flex-shrink-0">
                  <div className="relative inline-flex items-center justify-center w-10 h-10 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-cyan-400/40 shadow-lg shadow-cyan-400/30">
                    {/* Tech accent lines */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400"></div>
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-[2px] h-6 bg-gradient-to-b from-cyan-400 via-blue-400 to-fuchsia-400"></div>
                    <span className="text-lg text-cyan-300 drop-shadow-lg">{icon}</span>
                  </div>
                </div>
                
                {/* Title and minimal description - futuristic style */}
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-100 leading-tight tracking-wide drop-shadow-lg">
                    {highlight ? (
                      <>
                        {title.split(highlight)[0]}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent px-1 drop-shadow-lg">
                          {highlight}
                        </span>
                        {title.split(highlight)[1]}
                      </>
                    ) : (
                      title
                    )}
                  </h2>
                  {description && (
                    <p className="text-sm md:text-base text-blue-200/80 mt-1 font-light truncate max-w-md mx-auto tracking-wide drop-shadow-md">
                      {description.split(' ').slice(0, 6).join(' ')}
                    </p>
                  )}
                </div>
                
                {/* Futuristic accent element - right side */}
                <div className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent"></div>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-blue-400 to-transparent mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>
    )
  }

  // Full version
  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${gradient} relative border-b border-cyan-400/20`}>
        {/* Animated Neon Background Glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-fuchsia-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated pattern overlay */}
        {showPattern && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="grid grid-cols-12 gap-8 h-full opacity-40">
                  {[...Array(48)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Floating elements */}
        <div className="absolute top-4 left-8 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-8 right-12 w-3 h-3 bg-fuchsia-400/50 rounded-full animate-pulse shadow-lg shadow-fuchsia-400/50"></div>
        <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-violet-400/70 rounded-full animate-bounce delay-300 shadow-lg shadow-violet-400/50"></div>
        <div className="absolute bottom-4 right-8 w-2.5 h-2.5 bg-cyan-400/45 rounded-full animate-pulse delay-500 shadow-lg shadow-cyan-400/50"></div>

        {/* Main content */}
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-7xl mx-auto text-center">
            {/* Icon with glow effect */}
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-400/30">
              <span className="text-2xl md:text-3xl filter drop-shadow-lg text-cyan-400">{icon}</span>
            </div>

            {/* Title with highlight */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {subtitle && (
                <div className="inline-flex items-center px-4 py-1.5 bg-black/40 backdrop-blur-lg rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-400/20">
                  <span className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wider drop-shadow-md">
                    {subtitle}
                  </span>
                </div>
              )}
              
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold ${textColor} leading-tight drop-shadow-lg`}>
                {highlight ? (
                  <>
                    {title.split(highlight)[0]}
                    <span className="relative">
                      <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg">
                        {highlight}
                      </span>
                      <span className="absolute inset-0 bg-cyan-400/20 blur-md rounded-lg transform scale-110"></span>
                    </span>
                    {title.split(highlight)[1]}
                  </>
                ) : (
                  title
                )}
              </h2>
            </div>

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
                {description}
              </p>
            )}

            {/* Decorative elements */}
            <div className="flex items-center justify-center space-x-4 mt-6 md:mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex-1 max-w-24"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex-1 max-w-24"></div>
            </div>
          </div>
        </div>

        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-6 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

// Predefined configurations for different sections
export const sectionConfigs = {
  services: {
    title: 'Our Services',
    subtitle: 'Digital Solutions',
    highlight: 'Services',
    icon: '⚡',
    gradient: 'from-indigo-900 via-violet-800 to-blue-900',
    description: 'Next-gen digital solutions'
  },
  solutions: {
    title: 'Industry Solutions',
    subtitle: 'Tailored Strategies',
    highlight: 'Solutions',
    icon: '💡',
    gradient: 'from-purple-900 via-fuchsia-800 to-pink-900',
    description: 'Sector-specific innovations'
  },
  about: {
    title: 'About Midgrow',
    subtitle: 'Our Story',
    highlight: 'Midgrow',
    icon: '🎯',
    gradient: 'from-slate-900 via-zinc-800 to-neutral-900',
    description: 'Your innovation partner'
  },
  blog: {
    title: 'Latest Insights',
    subtitle: 'Blog & Updates',
    highlight: 'Insights',
    icon: '📝',
    gradient: 'from-sky-900 via-blue-800 to-indigo-900',
    description: 'Cutting-edge perspectives'
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Let\'s Connect',
    highlight: 'Touch',
    icon: '💬',
    gradient: 'from-emerald-900 via-teal-800 to-cyan-900',
    description: 'Start your tech journey'
  },
  pricing: {
    title: 'Pricing Plans',
    subtitle: 'Choose Your Package',
    highlight: 'Plans',
    icon: '💎',
    gradient: 'from-amber-900 via-orange-800 to-rose-900',
    description: 'Flexible tech solutions'
  },
  process: {
    title: 'Get Started Process',
    subtitle: 'Simple Steps',
    highlight: 'Process',
    icon: '🚀',
    gradient: 'from-cyan-900 via-blue-800 to-indigo-900',
    description: 'From concept to reality'
  },
  technology: {
    title: 'Our Technology',
    subtitle: 'Innovation',
    highlight: 'Technology',
    icon: '💻',
    gradient: 'from-violet-900 via-fuchsia-800 to-purple-900',
    description: 'Cutting-edge tech stack'
  }
}

// Convenience component for quick section headers
interface QuickSectionHeaderProps {
  section: keyof typeof sectionConfigs
  customTitle?: string
  customDescription?: string
  compact?: boolean
}

export const QuickSectionHeader = ({ 
  section, 
  customTitle, 
  customDescription,
  compact = false
}: QuickSectionHeaderProps) => {
  const config = sectionConfigs[section]
  
  return (
    <SectionHeader
      {...config}
      title={customTitle || config.title}
      description={customDescription || config.description}
      compact={compact}
    />
  )
}

export default SectionHeader
