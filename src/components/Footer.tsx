'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Generate deterministic particle positions for server-side rendering
// This ensures initial render doesn't have random values
const generateDeterministicParticles = () => {
  return [...Array(20)].map((_, i) => ({
    left: `${(i * 5) % 100}%`,
    top: `${(i * 7) % 100}%`,
    delay: '0s',
    duration: '3s',
  }))
}

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }) // Start with center position to match SSR
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>(generateDeterministicParticles())
  const [isMounted, setIsMounted] = useState(false)
  const currentYear = new Date().getFullYear()
  useEffect(() => {
    setIsMounted(true)
    
    // Generate particles only on the client side after a slight delay
    // to ensure hydration completes first
    const timer = setTimeout(() => {
      const newParticles = [...Array(20)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 4}s`,
      }))
      setParticles(newParticles)
    }, 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const services = [
    { name: 'AI-Powered Digital Marketing', href: '/services#digital-marketing', icon: '🤖' },
    { name: 'Advanced SEO Services', href: '/services#seo', icon: '🚀' },
    { name: 'Next-Gen Web Development', href: '/services#web-development', icon: '💻' },
    { name: 'Smart App Development', href: '/services#app-development', icon: '📱' },
  ]

  const industries = [
    { name: 'Healthcare', href: '/solutions/healthcare', icon: '🏥' },
    { name: 'Manufacturing', href: '/solutions/manufacturing', icon: '🏭' },
    { name: 'Retail & E-Commerce', href: '/solutions/retail-ecommerce', icon: '🛒' },
    { name: 'Real Estate', href: '/solutions/real-estate', icon: '🏢' },
  ]

  const company = [
    { name: 'About Us', href: '/about', icon: '🎯' },
    { name: 'Services', href: '/services', icon: '⚡' },
    { name: 'Solutions', href: '/solutions', icon: '💡' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Contact', href: '/contact', icon: '💬' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zM8.449 20.615c-2.761 0-5.002-2.24-5.002-5.002s2.241-5.002 5.002-5.002 5.002 2.24 5.002 5.002-2.241 5.002-5.002 5.002zm7.136 0c-2.761 0-5.002-2.24-5.002-5.002s2.241-5.002 5.002-5.002 5.002 2.24 5.002 5.002-2.241 5.002-5.002 5.002z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-purple-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="url(#gradient)" className="animate-pulse">
                  <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="50" x2="100" y2="50" stroke="url(#gradient)" strokeWidth="0.5" opacity="0.6"/>
                <line x1="50" y1="50" x2="50" y2="100" stroke="url(#gradient)" strokeWidth="0.5" opacity="0.6"/>
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6"/>
                <stop offset="50%" stopColor="#06B6D4"/>
                <stop offset="100%" stopColor="#EC4899"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)"/>
          </svg>
        </div>
          {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>        {/* Dynamic Gradient Overlay */}
        {isMounted && (
          <div 
            className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
            }}
          />
        )}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-4">                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">M</span>
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-30 animate-pulse"></div>
                        </div>
                        <div>
                          <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Midgrow
                          </span>
                          <p className="text-gray-400 text-xs">Solutions for Tomorrow</p>
                        </div>
                      </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                    Pioneering the future of digital transformation through cutting-edge AI-powered solutions, 
                    quantum-enhanced analytics, and next-generation automation technologies.
                  </p>
                </div>

                {/* Contact Info with Futuristic Design - Compacted */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Indore, Madhya Pradesh</p>
                      <p className="text-gray-500 text-xs">India, 462015</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs">✉️</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">info@midgrow.studio</p>
                      <p className="text-gray-500 text-xs">24/7 Response Guaranteed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">+91 7415603507</p>
                      <p className="text-gray-500 text-xs">AI-Powered Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Future Services
                </h3>
                <ul className="space-y-2">
                  {services.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Smart Industries
                </h3>
                <ul className="space-y-2">
                  {industries.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Digital Hub
                </h3>
                <ul className="space-y-2">
                  {company.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative border-t border-gray-700/50 py-4">
            {/* Animated Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                <p className="text-gray-400 text-xs">
                  © {currentYear} Midgrow. Crafting the Future.
                </p>
                <div className="flex space-x-3 text-xs text-gray-500">
                  <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy</Link>
                  <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms</Link>
                  <Link href="/cookies" className="hover:text-purple-400 transition-colors">Cookies</Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Social Links */}
                <div className="flex space-x-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                      aria-label={item.name}
                    >
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group relative px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Start Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </footer>
  )
}

export default Footer
