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
  gradient = 'from-blue-600 via-purple-600 to-pink-600',
  textColor = 'text-white',
  description,
  showPattern = true,
  compact = false
}: SectionHeaderProps) => {
  if (compact) {
    // Compact version - futuristic design, minimal height, no stickers
    return (
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-900/90 via-purple-800/90 to-pink-800/90 backdrop-blur-sm">
          <div className="relative px-4 sm:px-6 lg:px-8 py-2">
            {/* Futuristic accent line */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                {/* Futuristic icon container */}
                <div className="flex-shrink-0">
                  <div className="relative inline-flex items-center justify-center w-8 h-8 bg-black/30 backdrop-blur-lg rounded-lg border border-pink-500/40">
                    {/* Tech accent lines */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-[1px] bg-pink-400"></div>
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-[1px] h-4 bg-cyan-400"></div>
                    <span className="text-base text-pink-300">{icon}</span>
                  </div>
                </div>
                
                {/* Title and minimal description - futuristic style */}
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white leading-tight tracking-wide">
                    {highlight ? (
                      <>
                        {title.split(highlight)[0]}
                        <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent px-1">
                          {highlight}
                        </span>
                        {title.split(highlight)[1]}
                      </>
                    ) : (
                      title
                    )}
                  </h2>
                  {description && (
                    <p className="text-xs md:text-sm text-gray-300 mt-0.5 font-light truncate max-w-xs mx-auto tracking-wider">
                      {description.split(' ').slice(0, 4).join(' ')}
                    </p>
                  )}
                </div>
                
                {/* Futuristic accent element - right side */}
                <div className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        </div>
      </div>
    )
  }

  // Full version
  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${gradient} relative`}>
        {/* Animated pattern overlay */}
        {showPattern && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="grid grid-cols-12 gap-8 h-full opacity-30">
                  {[...Array(48)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Floating elements */}
        <div className="absolute top-4 left-8 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-12 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-4 right-8 w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse delay-500"></div>

        {/* Main content */}
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-7xl mx-auto text-center">
            {/* Icon with glow effect */}
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl">
              <span className="text-2xl md:text-3xl filter drop-shadow-lg">{icon}</span>
            </div>

            {/* Title with highlight */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {subtitle && (
                <div className="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <span className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wider">
                    {subtitle}
                  </span>
                </div>
              )}
              
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold ${textColor} leading-tight`}>
                {highlight ? (
                  <>
                    {title.split(highlight)[0]}
                    <span className="relative">
                      <span className="relative z-10 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {highlight}
                      </span>
                      <span className="absolute inset-0 bg-white/20 blur-sm rounded-lg transform scale-110"></span>
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
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
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
