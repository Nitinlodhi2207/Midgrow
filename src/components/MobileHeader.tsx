'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, BellIcon, MagnifyingGlassIcon, HeartIcon, ShareIcon, AdjustmentsHorizontalIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

interface MobileHeaderProps {
  title?: string
  subtitle?: string
  showBackButton?: boolean
  showNotifications?: boolean
  customActions?: React.ReactNode
  gradient?: string
  textColor?: string
}

const MobileHeader = ({ 
  title, 
  subtitle,
  showBackButton = false, 
  showNotifications = false,
  customActions,
  gradient = 'from-cyan-500 to-blue-600',
  textColor = 'text-white'
}: MobileHeaderProps) => {
  const pathname = usePathname()

  // Enhanced page configuration with futuristic design
  const getPageConfig = () => {
    if (title) return { title, subtitle: subtitle || '', icon: '🚀', gradient, textColor }
    
    switch (pathname) {
      case '/':
        return {
          // title: 'Midgrow',
          // subtitle: 'Transform Your Business',
          // icon: '🏠',
          gradient: 'from-cyan-500 to-blue-600',
          textColor: 'text-white'
        }
      case '/services':
        return {
          title: 'Our Services',
          // subtitle: 'Digital Solutions',
          // icon: '⚡',
          gradient: 'from-green-500 to-blue-600',
          textColor: 'text-white'
        }
      case '/solutions':
        return {
          title: 'Industry Solutions',
          // subtitle: 'Tailored Strategies',
          // icon: '💡',
          gradient: 'from-purple-500 to-pink-600',
          textColor: 'text-white'
        }
      case '/about':
        return {
          title: 'About Midgrow',
          subtitle: 'Our Story & Vision',
          icon: '🎯',
          gradient: 'from-orange-500 to-red-600',
          textColor: 'text-white'
        }
      case '/blog':
        return {
          title: 'Blog & Insights',
          // subtitle: 'Latest Updates',
          // icon: '📝',
          gradient: 'from-indigo-500 to-purple-600',
          textColor: 'text-white'
        }
      case '/contact':
        return {
          title: 'Get In Touch',
          subtitle: 'Let\'s Connect',
          icon: '💬',
          gradient: 'from-teal-500 to-blue-600',
          textColor: 'text-white'
        }
      default:
        return {
          title: 'Midgrow',
          subtitle: 'Transform Your Business',
          icon: '🚀',
          gradient: 'from-cyan-500 to-blue-600',
          textColor: 'text-white'
        }
    }
  }

  const pageConfig = getPageConfig()

  const getPageActions = () => {
    if (customActions) return customActions
    
    switch (pathname) {
      case '/':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/services':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <HeartIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/solutions':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/about':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <ShareIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/blog':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/contact':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        )
      default:
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <Bars3Icon className="w-5 h-5" />
            </button>
          </div>
        )
    }
  }

  return (
    <header className="bg-gradient-to-br from-[#0b0f19] to-[#000000] backdrop-blur-md border-b border-cyan-400/10 fixed top-0 z-50 w-full md:hidden shadow-lg shadow-cyan-400/20">
      <div className="flex items-center justify-between px-4 h-14 w-full">
        {/* Left: Midgrow Logo - Visually prominent but height-restricted */}
        <div className="flex items-center">
          {showBackButton ? (
            <button 
              onClick={() => window.history.back()}
              className="p-2 -ml-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
          ) : (
            <div>
              <Image
                src="/midgrow_logo.jpg"
                alt="Midgrow Logo"
                width={140}
                height={40}
                className="h-14 w-auto max-w-[140px] object-contain transition-all duration-300"
              />
            </div>
          )}
        </div>

        {/* Center: Tagline */}
        <div className="flex-1 flex justify-center">
          {pageConfig.subtitle && (
            <p className="text-xs text-cyan-300 font-medium tracking-wide whitespace-nowrap font-['Inter']">
              {pageConfig.subtitle}
            </p>
          )}
        </div>

        {/* Right: Search Icon in Glowing Circular Button */}
        <div className="flex items-center">
          <button className="w-12 h-12 rounded-full bg-white/5 border border-cyan-400/10 flex items-center justify-center hover:ring-1 hover:ring-cyan-500/20 transition-all duration-300">
            <MagnifyingGlassIcon className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
