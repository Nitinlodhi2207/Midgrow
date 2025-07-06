'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface MobilePageWrapperProps {
  children: ReactNode
  className?: string
  enableSafeArea?: boolean
  customBackground?: string
}

const MobilePageWrapper = ({ 
  children, 
  className = '', 
  enableSafeArea = true,
  customBackground
}: MobilePageWrapperProps) => {
  const pathname = usePathname()

  // Get page-specific background styling
  const getPageBackground = () => {
    if (customBackground) return customBackground
    
    switch (pathname) {
      case '/':
        return 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      case '/services':
        return 'bg-gradient-to-br from-green-50 via-white to-blue-50'
      case '/solutions':
        return 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
      case '/about':
        return 'bg-gradient-to-br from-orange-50 via-white to-red-50'
      case '/blog':
        return 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
      case '/contact':
        return 'bg-gradient-to-br from-teal-50 via-white to-blue-50'
      default:
        return 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }
  }

  const safeAreaClasses = enableSafeArea 
    ? 'safe-area-top safe-area-bottom pb-nav-bottom md:pb-0' 
    : ''

  return (
    <div className={`
      min-h-screen
      page-transition 
      ${getPageBackground()}
      ${safeAreaClasses} 
      ${className}
    `}>
      {/* Mobile-optimized content */}
      <div className="md:hidden">
        <div className="pt-0 pb-6">
          {children}
        </div>
      </div>
      
      {/* Desktop version */}
      <div className="hidden md:block">
        {children}
      </div>
    </div>
  )
}

export default MobilePageWrapper
