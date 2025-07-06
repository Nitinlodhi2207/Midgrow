'use client'

import Link from 'next/link'
import { ArrowLeftIcon, BellIcon, MagnifyingGlassIcon, HeartIcon, ShareIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
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
  gradient = 'from-blue-600 to-purple-600',
  textColor = 'text-gray-900'
}: MobileHeaderProps) => {
  const pathname = usePathname()

  // Enhanced page configuration with unique content
  const getPageConfig = () => {
    if (title) return { title, subtitle: subtitle || '', icon: '🚀', gradient, textColor }
    
    switch (pathname) {
      case '/':
        return {
          title: 'Midgrow',
          subtitle: 'Transform Your Business',
          icon: '🏠',
          gradient: 'from-blue-600 to-purple-600',
          textColor: 'text-gray-900'
        }
      case '/services':
        return {
          title: 'Our Services',
          subtitle: 'Digital Solutions',
          icon: '⚡',
          gradient: 'from-green-600 to-blue-600',
          textColor: 'text-gray-900'
        }
      case '/solutions':
        return {
          title: 'Industry Solutions',
          subtitle: 'Tailored Strategies',
          icon: '💡',
          gradient: 'from-purple-600 to-pink-600',
          textColor: 'text-gray-900'
        }
      case '/about':
        return {
          title: 'About Midgrow',
          subtitle: 'Our Story & Vision',
          icon: '🎯',
          gradient: 'from-orange-600 to-red-600',
          textColor: 'text-gray-900'
        }
      case '/blog':
        return {
          title: 'Blog & Insights',
          subtitle: 'Latest Updates',
          icon: '📝',
          gradient: 'from-indigo-600 to-purple-600',
          textColor: 'text-gray-900'
        }
      case '/contact':
        return {
          title: 'Get In Touch',
          subtitle: 'Let\'s Connect',
          icon: '💬',
          gradient: 'from-teal-600 to-blue-600',
          textColor: 'text-gray-900'
        }
      default:
        return {
          title: 'Midgrow',
          subtitle: 'Transform Your Business',
          icon: '🚀',
          gradient: 'from-blue-600 to-purple-600',
          textColor: 'text-gray-900'
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
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/services':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <HeartIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/solutions':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/about':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <ShareIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/blog':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        )
      case '/contact':
        return (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 md:hidden">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-3">
            {showBackButton ? (
              <button 
                onClick={() => window.history.back()}
                className="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            ) : (
              <div className={`w-8 h-8 bg-gradient-to-br ${pageConfig.gradient} rounded-lg flex items-center justify-center shadow-md`}>
                <span className="text-white font-bold text-sm">B</span>
              </div>
            )}
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{pageConfig.icon}</span>
                <h1 className={`text-lg font-semibold ${pageConfig.textColor} truncate max-w-[180px]`}>
                  {pageConfig.title}
                </h1>
              </div>
              {pageConfig.subtitle && (
                <p className="text-xs text-gray-500 ml-7 truncate max-w-[180px]">
                  {pageConfig.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            {getPageActions()}
            {showNotifications && (
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </span>
              </button>
            )}
            <Link 
              href="/contact" 
              className={`bg-gradient-to-r ${pageConfig.gradient} text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200`}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
      
      {/* Optional status bar for different pages */}
      {pathname !== '/' && (
        <div className={`bg-gradient-to-r ${pageConfig.gradient} px-4 py-1`}>
          <div className="flex items-center justify-between text-white text-xs">
            <span className="opacity-90">Specialized solutions for your industry</span>
            <span className="opacity-90">Free consultation available</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default MobileHeader
