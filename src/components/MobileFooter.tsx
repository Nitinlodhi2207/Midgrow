'use client'

import Link from 'next/link'
import { useState } from 'react'

const MobileFooter = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const footerSections = [
    {
      title: 'Services',
      id: 'services',
      links: [
        { name: 'Digital Marketing', href: '/services#digital-marketing' },
        { name: 'SEO Optimization', href: '/services#seo' },
        { name: 'Web Development', href: '/services#web-dev' },
        { name: 'App Development', href: '/services#app-dev' },
        { name: 'Content Creation', href: '/services#content' },
        { name: 'Business Automation', href: '/services#automation' }
      ]
    },
    {
      title: 'Solutions',
      id: 'solutions',
      links: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Solar Energy', href: '/solutions/solar' },
        { name: 'Home Services', href: '/solutions/home-services' },
        { name: 'E-commerce', href: '/solutions/ecommerce' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    {
      title: 'Company',
      id: 'company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529l1.703-1.703c.389.389.925.629 1.502.629.576 0 1.113-.24 1.502-.629l1.703 1.703c-.757.933-1.908 1.529-3.205 1.529zm7.518 0c-1.297 0-2.448-.596-3.205-1.529l1.703-1.703c.389.389.925.629 1.502.629.576 0 1.113-.24 1.502-.629l1.703 1.703c-.757.933-1.908 1.529-3.205 1.529z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-black text-white text-sm mb-16">
      {/* Main Footer Content - Even More Compact */}
      <div className="px-2 py-0 pb-3">
        {/* Company Info - More compact */}
        <div className="flex items-center justify-between mb-1 mt-0">
          <Link href="/" className="flex items-center">
            <h2 className="text-base font-bold text-white">
              Midgrow
            </h2>
          </Link>
          
          {/* Social Links - Moved to top for easy access */}
          <div className="flex space-x-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="p-1 bg-gray-700 rounded-md hover:bg-blue-600 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links - Horizontal Scrollable */}
        <div className="flex overflow-x-auto pb-1.5 mb-1.5 scrollbar-hide space-x-2">
          <Link href="/about" className="bg-gray-700 whitespace-nowrap px-2 py-0.5 rounded-md text-xs hover:bg-gray-600">About Us</Link>
          <Link href="/services" className="bg-gray-700 whitespace-nowrap px-2 py-0.5 rounded-md text-xs hover:bg-gray-600">Services</Link>
          <Link href="/solutions" className="bg-gray-700 whitespace-nowrap px-2 py-0.5 rounded-md text-xs hover:bg-gray-600">Solutions</Link>
          <Link href="/blog" className="bg-gray-700 whitespace-nowrap px-2 py-0.5 rounded-md text-xs hover:bg-gray-600">Blog</Link>
          <Link href="/contact" className="bg-gray-700 whitespace-nowrap px-2 py-0.5 rounded-md text-xs hover:bg-gray-600">Contact</Link>
        </div>

        {/* Expandable Sections - More compact with smaller text */}
        <div className="space-y-0.5">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-700 pb-0.5">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left py-1"
              >
                <span className="font-medium text-xs text-white">{section.title}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === section.id && (
                <div className="mt-0.5 ml-2 space-y-0.5 mobile-fade-in grid grid-cols-2 gap-x-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors py-0.5 text-xs"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info & CTA Combined - More compact */}
        <div className="flex justify-between items-center mt-2 text-xs">
          <div className="text-gray-400 text-xs">
            <p>📧 info@midgrow.studio</p>
            <p>📍 Indore, Madhya Pradesh, India</p>
          </div>
          <Link 
            href="/contact"
            className="bg-blue-600 text-white px-2 py-1 rounded-md font-medium hover:bg-blue-700 transition-colors text-xs"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom Bar - Simplified */}
      <div className="border-t border-gray-700 px-2 py-1 text-center">
        <p className="text-xs text-gray-400">&copy; 2025 Midgrow.</p>
      </div>
    </footer>
  )
}

export default MobileFooter
