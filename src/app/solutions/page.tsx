import React from 'react'
import Link from 'next/link'
import { sectors } from '@/data/sectors'

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Industry-Specific <span className="text-blue-600">Digital Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Tailored digital strategies and solutions designed specifically for your industry. 
              We understand your unique challenges and deliver targeted results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Industry-Specific Consultation
              </a>
              <a
                href="#industries"
                className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore Industries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Solutions */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Why Industry-Specific Solutions Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Every industry has unique challenges, regulations, and opportunities. Our specialized approach 
              ensures you get solutions that actually work for your specific business context.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6">
            <div className="text-center p-2 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-sm sm:text-lg md:text-xl">🎯</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Targeted Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Solutions designed specifically for your industry&apos;s unique requirements and challenges.
              </p>
            </div>
            
            <div className="text-center p-2 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-sm sm:text-lg md:text-xl">⚡</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Faster Implementation</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Pre-configured solutions and industry best practices mean faster deployment and results.
              </p>
            </div>
            
            <div className="text-center p-2 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-sm sm:text-lg md:text-xl">📈</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Better ROI</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Industry-focused solutions deliver higher returns by addressing real business pain points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your industry to discover specialized digital solutions designed for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <Link
                key={sector.id}
                href={`/solutions/${sector.slug}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {sector.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {sector.shortDescription}
                  </p>
                  <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    Explore Solutions →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We work with businesses across all sectors. Contact us to discuss custom solutions for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Discuss Your Industry
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
