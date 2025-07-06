'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
  HomeIcon, 
  CogIcon, 
  LightBulbIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  CogIcon as CogIconSolid,
  LightBulbIcon as LightBulbIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  DocumentTextIcon as DocumentTextIconSolid,
  PhoneIcon as PhoneIconSolid
} from '@heroicons/react/24/solid'

const BottomNavigation = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)
  const [ripples, setRipples] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  const handleTabPress = (href: string) => {
    setRipples(prev => ({ ...prev, [href]: true }))
    setTimeout(() => {
      setRipples(prev => ({ ...prev, [href]: false }))
    }, 300)
  }

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
      emoji: '🏠',
      color: 'blue',
      activeColor: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Services',
      href: '/services',
      icon: CogIcon,
      activeIcon: CogIconSolid,
      emoji: '⚡',
      color: 'green',
      activeColor: 'from-green-600 to-blue-600'
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: LightBulbIcon,
      activeIcon: LightBulbIconSolid,
      emoji: '💡',
      color: 'purple',
      activeColor: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: DocumentTextIcon,
      activeIcon: DocumentTextIconSolid,
      emoji: '📝',
      color: 'indigo',
      activeColor: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: PhoneIcon,
      activeIcon: PhoneIconSolid,
      emoji: '💬',
      color: 'teal',
      activeColor: 'from-teal-600 to-blue-600'
    }
  ]

  return (
    <>
      {/* Bottom Navigation - Mobile with Enhanced Design */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 z-50 shadow-xl pb-safe">
        {/* Floating Active Indicator */}
        <div className="absolute top-0 left-0 right-0 h-1">
          {navigation.map((item) => (
            pathname === item.href && (
              <div 
                key={item.href}
                className={`absolute top-0 h-1 bg-gradient-to-r ${item.activeColor} transition-all duration-300 ease-out`}
                style={{
                  left: `${(navigation.findIndex(nav => nav.href === item.href) / navigation.length) * 100}%`,
                  width: `${100 / navigation.length}%`
                }}
              />
            )
          ))}
        </div>

        <div className="grid grid-cols-5 h-16 relative">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href
            const Icon = isActive ? item.activeIcon : item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleTabPress(item.href)}
                className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 relative overflow-hidden group ${
                  isActive 
                    ? `text-${item.color}-600 transform -translate-y-1` 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {/* Ripple Effect */}
                {ripples[item.href] && (
                  <div className="absolute inset-0 bg-gray-200 rounded-full animate-ping opacity-30" />
                )}
                
                {/* Icon Container with Enhanced Active State */}
                <div className={`relative transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-br ${item.activeColor} p-1.5 rounded-lg shadow-md` 
                    : 'p-1.5 group-hover:bg-gray-100 rounded-lg'
                }`}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-white scale-110' : 'text-gray-500'
                  }`} />
                  
                  {/* Active State Pulse */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.activeColor} rounded-lg animate-pulse opacity-20`} />
                  )}
                  
                  {/* Notification Badge */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className={`w-1.5 h-1.5 bg-${item.color}-500 rounded-full animate-pulse`} />
                    </div>
                  )}
                </div>
                
                {/* Label with Enhanced Typography */}
                <span className={`text-[10px] font-medium transition-all duration-300 ${
                  isActive 
                    ? `text-${item.color}-600 font-semibold` 
                    : 'text-gray-500'
                }`}>
                  {item.name}
                </span>
                
                {/* Subtle emoji for extra personality */}
                {isActive && (
                  <div className="absolute -top-1 opacity-70 text-[10px] animate-bounce">
                    {item.emoji}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
        
        {/* Safe Area for devices with home indicator */}
        <div className="h-2 bg-white/95" />
      </nav>

      {/* Desktop Header - Hidden on Mobile */}
      <header className="hidden md:block bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="font-bold text-xl text-gray-900">
                  Midgrow
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default BottomNavigation
