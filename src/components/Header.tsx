'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-gradient-to-br from-[#0b0f19] to-[#000000] backdrop-blur-md border-b border-cyan-400/10 sticky top-0 z-50 shadow-lg shadow-cyan-400/20">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-fuchsia-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="hidden sm:block font-bold text-xl bg-gradient-to-r from-cyan-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                Midgrow
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cyan-100/90 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:drop-shadow-lg relative group font-['Inter']"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="relative group overflow-hidden bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/30 backdrop-blur-lg shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:border-cyan-400/50">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 drop-shadow-md font-['Inter']">Get Quote</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyan-100/90 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2 transition-colors duration-300 hover:bg-cyan-400/10 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-[#0b0f19]/95 to-[#000000]/95 backdrop-blur-lg border-t border-cyan-400/20 rounded-b-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cyan-100/90 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-['Inter']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/30 backdrop-blur-lg shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 w-full text-center block font-['Inter']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 drop-shadow-md">Get Quote</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
