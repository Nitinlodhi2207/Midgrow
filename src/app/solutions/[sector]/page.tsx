import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSectorBySlug, getSectors, Sector } from '@/lib/supabase'

interface SectorPageProps {
  params: Promise<{
    sector: string
  }>
}

export async function generateStaticParams() {
  const sectors = await getSectors();
  return sectors.map((sector) => ({
    sector: sector.slug,
  }));
}

export async function generateMetadata({ params }: SectorPageProps) {
  const { sector: sectorSlug } = await params
  const sector = await getSectorBySlug(sectorSlug)
  
  if (!sector) {
    return {
      title: 'Sector Not Found'
    }
  }

  return {
    title: `${sector.name} Digital Solutions | Midgrow`,
    description: sector.description,
    keywords: sector.seo_keywords.join(', '),
  }
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { sector: sectorSlug } = await params
  const [sector, allSectors] = await Promise.all([
    getSectorBySlug(sectorSlug),
    getSectors()
  ])

  if (!sector) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Breadcrumb */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-blue-600">Solutions</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{sector.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{sector.icon}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {sector.name} <br />
                  <span className="text-blue-600">Digital Solutions</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {sector.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="#solutions"
                  className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
                >
                  View Solutions
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Industry Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Specialized solutions for {sector.name.toLowerCase()} businesses</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Proven track record with industry-specific challenges</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Fast implementation and measurable results</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">24/7 support and maintenance included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Common {sector.name} Challenges
              </h2>
              <div className="space-y-4">
                {sector.challenges.map((challenge: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Solutions
              </h2>
              <div className="space-y-4">
                {sector.solutions.map((solution: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for This Industry */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our {sector.name} Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital services tailored specifically for {sector.name.toLowerCase()} businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sector.services.map((service: string, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Specialized {service.toLowerCase()} solutions designed for {sector.name.toLowerCase()} industry requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our {sector.name} Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven benefits that our {sector.name.toLowerCase()} clients experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">              {sector.benefits.map((benefit: string, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">📊</span>
                </div>
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Example */}
      {sector.caseStudyExample && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Story
              </h2>
              <p className="text-xl text-gray-600">
                Real results from our {sector.name.toLowerCase()} clients
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {sector.caseStudyExample.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {sector.caseStudyExample.description}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {sector.caseStudyExample.results.map((result: string, index: number) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {result.split(' ')[0]}
                    </p>
                    <p className="text-sm text-gray-700">
                      {result.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your {sector.name} Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our specialized {sector.name.toLowerCase()} solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Other Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Explore digital solutions for other sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allSectors
              .filter((s: Sector) => s.id !== sector.id)
              .slice(0, 4)
              .map((relatedSector: Sector) => (
                <Link
                  key={relatedSector.id}
                  href={`/solutions/${relatedSector.slug}`}
                  className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {relatedSector.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {relatedSector.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Explore Solutions →
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
