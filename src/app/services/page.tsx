'use client'

import React, { useState, useRef, useEffect } from 'react'

export default function ServicesPage() {
  // State for carousel management
  const [currentSuccessSlide, setCurrentSuccessSlide] = useState(0);
  const [currentProcessSlide, setCurrentProcessSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Refs for carousel elements
  const successCarouselRef = useRef<HTMLDivElement>(null);
  const processCarouselRef = useRef<HTMLDivElement>(null);
  
  // Hydration effect
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  // Auto-swipe for Success Stories
  useEffect(() => {
    if (!isHydrated) return;
    
    const successTimer = setInterval(() => {
      if (successCarouselRef.current && !successCarouselRef.current.matches(':hover')) {
        setCurrentSuccessSlide(prev => (prev + 1) % 3); // 3 success stories
      }
    }, 4000); // 4 seconds per slide
    
    return () => clearInterval(successTimer);
  }, [isHydrated]);
  
  // Auto-swipe for Process
  useEffect(() => {
    if (!isHydrated) return;
    
    const processTimer = setInterval(() => {
      if (processCarouselRef.current && !processCarouselRef.current.matches(':hover')) {
        setCurrentProcessSlide(prev => (prev + 1) % 4); // 4 process steps
      }
    }, 3500); // 3.5 seconds per slide
    
    return () => clearInterval(processTimer);
  }, [isHydrated]);
  
  // Scroll effects for carousels
  useEffect(() => {
    if (!isHydrated || !successCarouselRef.current) return;
    
    const cardWidth = successCarouselRef.current.scrollWidth / 3;
    const scrollAmount = currentSuccessSlide * cardWidth;
    
    successCarouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [currentSuccessSlide, isHydrated]);
  
  useEffect(() => {
    if (!isHydrated || !processCarouselRef.current) return;
    
    const cardWidth = processCarouselRef.current.scrollWidth / 4;
    const scrollAmount = currentProcessSlide * cardWidth;
    
    processCarouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [currentProcessSlide, isHydrated]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive digital solutions designed to transform your business and accelerate growth through innovative technology and proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="#services"
                className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Digital Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital services to help your business thrive in the digital age
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Digital Marketing</h3>
                  <p className="text-blue-600 font-medium">Drive Growth & Engagement</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive digital marketing strategies to amplify your brand reach, engage your target audience, 
                and drive measurable business growth through data-driven campaigns.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Online Advertising & Campaign Setup</h4>
                    <p className="text-sm text-gray-600">A/B testing, brand outreach, and performance optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Media Management</h4>
                    <p className="text-sm text-gray-600">Content calendars, community management, and engagement strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Marketing & Lead Nurturing</h4>
                    <p className="text-sm text-gray-600">Automated campaigns and customer journey optimization</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-blue-800 font-medium text-sm">✨ Perfect for businesses looking to expand their online presence and generate quality leads</p>
              </div>
            </div>

            {/* SEO Services */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SEO Optimization</h3>
                  <p className="text-green-600 font-medium">Dominate Search Rankings</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic SEO solutions that boost your search engine visibility, drive organic traffic, 
                and establish your authority in your industry through proven optimization techniques.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategy Design & Execution</h4>
                    <p className="text-sm text-gray-600">Comprehensive SEO auditing and implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local SEO & Keyword Optimization</h4>
                    <p className="text-sm text-gray-600">Target local customers and high-converting keywords</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Backlink Building</h4>
                    <p className="text-sm text-gray-600">High-quality link acquisition and domain authority growth</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-green-800 font-medium text-sm">🚀 Our SEO campaigns achieve top 5 SERP rankings within 3 months</p>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 002-2h10a2 2 0 002 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Web Development</h3>
                  <p className="text-purple-600 font-medium">Modern Digital Experiences</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom web solutions built with cutting-edge technologies to deliver exceptional user experiences, 
                drive conversions, and provide scalable platforms for your business growth.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Websites</h4>
                    <p className="text-sm text-gray-600">Professional, responsive websites that convert visitors to customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Landing Pages</h4>
                    <p className="text-sm text-gray-600">High-converting landing pages optimized for campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">eCommerce Platforms</h4>
                    <p className="text-sm text-gray-600">Complete online stores with payment integration and inventory management</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-purple-800 font-medium text-sm">💻 Built with modern frameworks for optimal performance and SEO</p>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 2h6v12H7V4zm8 0h1v12h-1V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">App Development</h3>
                  <p className="text-orange-600 font-medium">Mobile-First Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Native and hybrid mobile applications that deliver seamless user experiences across all devices, 
                helping you connect with customers wherever they are.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Android/iOS Apps</h4>
                    <p className="text-sm text-gray-600">Native mobile applications for startups and businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hybrid Solutions</h4>
                    <p className="text-sm text-gray-600">Cross-platform apps that work seamlessly on all devices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Features</h4>
                    <p className="text-sm text-gray-600">GPS tracking, payments, real-time sync, and advanced integrations</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-orange-800 font-medium text-sm">📱 Successful apps include attendance management and service booking platforms</p>
              </div>
            </div>

            {/* Content Creation */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Content Creation</h3>
                  <p className="text-pink-600 font-medium">Engaging Brand Stories</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compelling content that tells your brand story, engages your audience, and drives conversions 
                across all digital platforms and marketing channels.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Blogs & Articles</h4>
                    <p className="text-sm text-gray-600">SEO-optimized content that establishes thought leadership</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Infographics & Videos</h4>
                    <p className="text-sm text-gray-600">Visual content that simplifies complex information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marketing Copy</h4>
                    <p className="text-sm text-gray-600">Persuasive copy for social media and paid advertising campaigns</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-xl p-4">
                <p className="text-pink-800 font-medium text-sm">✍️ Content that resonates with your audience and drives engagement</p>
              </div>
            </div>

            {/* Business Automation */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Automation</h3>
                  <p className="text-indigo-600 font-medium">Streamlined Operations</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intelligent automation solutions that streamline your business processes, reduce manual work, 
                and increase operational efficiency while maintaining quality and consistency.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CRM Integration</h4>
                    <p className="text-sm text-gray-600">Customer relationship management and sales pipeline automation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">HR & Lead Pipelines</h4>
                    <p className="text-sm text-gray-600">Automated HR processes and lead management systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Workflow Automation</h4>
                    <p className="text-sm text-gray-600">End-to-end process automation for service delivery</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-4">
                <p className="text-indigo-800 font-medium text-sm">⚡ Reduce manual work by up to 80% with smart automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Flexible Pricing Models</h2>
            <p className="text-xl text-gray-600">Choose the payment structure that aligns with your business goals and budget</p>
          </div>
          
          {/* Horizontal Scrollable Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide smooth-scroll-x pb-4 snap-x snap-mandatory" 
                 style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow snap-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Retainer/Subscription</h3>
                <p className="text-gray-600 mb-4">Monthly packages for ongoing services with predictable costs and continuous optimization.</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Basic, Standard, Premium tiers</div>
                  <div>• Monthly reporting & insights</div>
                  <div>• Strategy adjustments included</div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow snap-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project-Based</h3>
                <p className="text-gray-600 mb-4">Fixed pricing for one-time deliverables with clear scope and timelines.</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Detailed proposals provided</div>
                  <div>• Fixed-price guarantees</div>
                  <div>• Clear project timelines</div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow snap-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance-Based</h3>
                <p className="text-gray-600 mb-4">Pay based on predefined outcomes and ROI benchmarks we achieve together.</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Qualified leads & MQLs</div>
                  <div>• CPL & ROI benchmarks</div>
                  <div>• Bonus for exceeding targets</div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow snap-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commission-Based</h3>
                <p className="text-gray-600 mb-4">Revenue sharing model based on generated sales or marketing spend.</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Commission on ad spends</div>
                  <div>• Sales-based earnings</div>
                  <div>• Transparent tracking</div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Futuristic Horizontal Carousel */}
      <section className="py-10 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/10 rounded-full blur-xl animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-cyan-300">
              Proven Success Stories
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Real projects, real results for businesses like yours
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center space-x-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSuccessSlide === index
                      ? 'bg-blue-400 scale-110'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Horizontal Scrollable Carousel */}
          <div className="relative">
            <div 
              ref={successCarouselRef}
              className="flex overflow-x-auto scrollbar-hide smooth-scroll-x snap-x snap-mandatory gap-4 sm:gap-8 pb-2 sm:pb-4"
              style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
            >
              {/* Attendance Management App */}
              <div className="flex-shrink-0 w-72 sm:w-full md:w-[calc(100%/3-32px)] snap-start">
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-4 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Attendance Management App</h3>
                    <p className="mb-3 sm:mb-6 opacity-90 text-blue-100 text-sm sm:text-base">
                      Developed a comprehensive attendance tracking system with real-time GPS monitoring, 
                      salary management, and leave tracking for businesses.
                    </p>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Real-time tracking & GPS grouping</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Salary & leave management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Scalable for multiple businesses</span>
                      </div>
                    </div>
                  </div>
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
                </div>
              </div>

              {/* Solar Service Booking App */}
              <div className="flex-shrink-0 w-72 sm:w-full md:w-[calc(100%/3-32px)] snap-start">
                <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl p-4 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Solar Service Booking App</h3>
                    <p className="mb-3 sm:mb-6 opacity-90 text-green-100 text-sm sm:text-base">
                      Streamlined service booking platform for solar energy services with automated 
                      technician assignment and customer feedback integration.
                    </p>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Simplified booking flow</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Technician assignment system</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Customer feedback integration</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
                </div>
              </div>
              
              {/* SEO Success Campaign */}
              <div className="flex-shrink-0 w-72 sm:w-full md:w-[calc(100%/3-32px)] snap-start">
                <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl p-4 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">SEO Success Campaign</h3>
                    <p className="mb-3 sm:mb-6 opacity-90 text-purple-100 text-sm sm:text-base">
                      Achieved remarkable SEO results for our parent company, dramatically improving 
                      search visibility and generating quality inbound leads.
                    </p>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Top 5 SERP rankings in 3 months</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Increased website traffic by 300%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-2 sm:mr-3"></div>
                        <span>• Enhanced brand perception</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Futuristic Horizontal Carousel */}
      <section className="py-10 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 relative overflow-hidden">
        {/* Animated Digital Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
          {/* Floating elements */}
          <div className="absolute top-6 left-6 w-10 h-10 sm:w-20 sm:h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-8 w-8 h-8 sm:w-16 sm:h-16 bg-indigo-500/20 rounded-full blur-xl animate-bounce-slow"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full blur-xl animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-300">
              Our Process
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
              From consultation to delivery, we ensure every step adds value
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentProcessSlide === index
                      ? 'bg-cyan-400 scale-110 shadow-lg shadow-cyan-400/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Horizontal Scrollable Process Carousel */}
          <div className="relative">
            <div 
              ref={processCarouselRef}
              className="flex overflow-x-auto scrollbar-hide smooth-scroll-x snap-x snap-mandatory gap-4 sm:gap-8 pb-2 sm:pb-4"
              style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
            >
              {/* Step 1: Discovery */}
              <div className="flex-shrink-0 w-64 sm:w-full md:w-[calc(100%/4-24px)] snap-start">
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-8 text-white border border-cyan-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/50 group-hover:shadow-xl group-hover:shadow-cyan-500/70 transition-all duration-300">
                      <span className="text-white font-bold text-lg sm:text-2xl">1</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-cyan-400 mb-2 sm:mb-4">Discovery</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      We analyze your business, goals, and challenges to create a tailored strategy that aligns with your vision
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-3 sm:mt-6 w-full bg-gray-700 rounded-full h-1 sm:h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full"></div>
                </div>
              </div>
              
              {/* Step 2: Strategy */}
              <div className="flex-shrink-0 w-64 sm:w-full md:w-[calc(100%/4-24px)] snap-start">
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-8 text-white border border-indigo-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-transparent to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-indigo-500/50 group-hover:shadow-xl group-hover:shadow-indigo-500/70 transition-all duration-300">
                      <span className="text-white font-bold text-lg sm:text-2xl">2</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-indigo-400 mb-2 sm:mb-4">Strategy</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Develop a comprehensive plan with clear timelines and measurable outcomes for maximum impact
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-3 sm:mt-6 w-full bg-gray-700 rounded-full h-1 sm:h-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-bl-full"></div>
                </div>
              </div>
              
              {/* Step 3: Execution */}
              <div className="flex-shrink-0 w-64 sm:w-full md:w-[calc(100%/4-24px)] snap-start">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-8 text-white border border-purple-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/70 transition-all duration-300">
                      <span className="text-white font-bold text-lg sm:text-2xl">3</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-purple-400 mb-2 sm:mb-4">Execution</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Implement solutions with regular updates and transparent communication throughout the process
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-3 sm:mt-6 w-full bg-gray-700 rounded-full h-1 sm:h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '50%'}}></div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full"></div>
                </div>
              </div>
              
              {/* Step 4: Optimization */}
              <div className="flex-shrink-0 w-64 sm:w-full md:w-[calc(100%/4-24px)] snap-start">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-8 text-white border border-orange-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-orange-500/50 group-hover:shadow-xl group-hover:shadow-orange-500/70 transition-all duration-300">
                      <span className="text-white font-bold text-lg sm:text-2xl">4</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-orange-400 mb-2 sm:mb-4">Optimization</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Continuously monitor, analyze, and optimize for maximum performance and ROI
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-3 sm:mt-6 w-full bg-gray-700 rounded-full h-1 sm:h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-1 sm:h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Process flow indicator */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Discovery
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400"></div>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  Strategy
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Execution
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400"></div>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                  Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our digital solutions can help you achieve your business goals. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get Free Consultation
            </a>
            <a
              href="tel:+917415603507"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}