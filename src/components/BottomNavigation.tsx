'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      {/* Bottom Navigation - Mobile with Enhanced Futuristic Design */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900/95 to-gray-800/90 backdrop-blur-xl border-t border-amber-400/30 z-50 shadow-xl shadow-amber-400/20 pb-safe">
        {/* Floating Active Indicator */}
        <div className="absolute top-0 left-0 right-0 h-1">
          {navigation.map((item) => (
            pathname === item.href && (
              <div 
                key={item.href}
                className={`absolute top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 transition-all duration-300 ease-out shadow-lg shadow-amber-400/60`}
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
                    ? `text-amber-300 transform -translate-y-1 drop-shadow-lg` 
                    : 'text-amber-600 hover:text-amber-400'
                }`}
              >
                {/* Ripple Effect */}
                {ripples[item.href] && (
                  <div className="absolute inset-0 bg-amber-400/30 rounded-full animate-ping opacity-60" />
                )}
                
                {/* Icon Container with Enhanced Active State */}
                <div className={`relative transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-br from-amber-500 to-yellow-600 p-1.5 rounded-xl shadow-lg shadow-amber-400/50` 
                    : 'p-1.5 group-hover:bg-amber-900/20 rounded-xl'
                }`}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-white scale-110 drop-shadow-lg' : 'text-amber-500 group-hover:text-amber-400'
                  }`} />
                  
                  {/* Active State Glow */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl animate-pulse opacity-40 blur-md`} />
                  )}
                  
                  {/* Notification Badge */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className={`w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse`} />
                    </div>
                  )}
                </div>
                
                {/* Label with Enhanced Typography */}
                <span className={`text-[10px] font-medium transition-all duration-300 font-['Inter'] ${
                  isActive 
                    ? `text-amber-300 font-semibold drop-shadow-lg` 
                    : 'text-amber-600 group-hover:text-amber-400'
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
        <div className="h-2 bg-gradient-to-t from-black via-gray-900/95 to-gray-800/90 backdrop-blur-xl" />
      </nav>

      {/* Desktop Header - Hidden on Mobile */}
      <header className="hidden md:block bg-gradient-to-br from-[#0b0f19] to-[#000000] backdrop-blur-md border-b border-cyan-400/10 sticky top-0 z-50 shadow-lg shadow-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/midgrow_logo.jpg"
                    alt="Midgrow Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-lg object-cover shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/70 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 font-['Orbitron']">
                  Midgrow
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group font-['Inter'] ${
                    pathname === item.href
                      ? 'text-cyan-400'
                      : 'text-cyan-100/90 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link href="/contact" className="relative group overflow-hidden bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/30 backdrop-blur-lg shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:border-cyan-400/50 font-['Inter']">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 drop-shadow-md">Get Quote</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default BottomNavigation
