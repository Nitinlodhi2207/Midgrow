import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSectors, Sector } from '@/lib/supabase';
import { industryBenefits } from '@/data/homeData';
import UnifiedSectionHeader from '@/components/UnifiedSectionHeader';

interface IndustrySolutionsSectionProps {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  sectorsCarouselRef: React.RefObject<HTMLDivElement>;
  isHydrated: boolean;
  onIndustryConsultation: () => void;
  onCustomIndustry: () => void;
}

export default function IndustrySolutionsSection({
  currentSlide,
  setCurrentSlide,
  sectorsCarouselRef,
  isHydrated,
  onIndustryConsultation,
  onCustomIndustry
}: IndustrySolutionsSectionProps) {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSectors() {
      try {
        const sectorsData = await getSectors();
        setSectors(sectorsData || []);
      } catch (error) {
        console.error('Error fetching sectors:', error);
        setSectors([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSectors();
  }, []);

  const getVisibleSectors = () => {
    if (typeof window === 'undefined') return 4;
    return window.innerWidth < 480 ? 3 : 
           window.innerWidth < 768 ? 3 : 
           window.innerWidth < 1024 ? 3 : 4;
  };

  const totalSectors = sectors.slice(0, 12).length;
  const visibleSectors = getVisibleSectors();
  const totalSlides = Math.ceil(totalSectors / visibleSectors);

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <UnifiedSectionHeader 
          section="solutions" 
          compact={true} 
          bgColor="bg-gray-50" 
          contentBgColor="bg-white"
        >
          <div className="relative rounded-xl md:rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-lg overflow-hidden border border-blue-100/50">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-4 text-center relative">
              <h3 className="text-white text-sm md:text-base font-semibold">Featured Industry Solutions</h3>
            </div>
            <div className="py-8 px-4">
              <div className="flex gap-4 justify-center">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-24 h-32 bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </UnifiedSectionHeader>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      {/* Unified Section Header with content */}
      <UnifiedSectionHeader 
        section="solutions" 
        compact={true} 
        bgColor="bg-gray-50" 
        contentBgColor="bg-white"
      >
        {/* Unified Industry Solutions Container */}
        <div className="relative rounded-xl md:rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-lg overflow-hidden border border-blue-100/50">
          
          {/* Section Title Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-4 text-center relative">
            <h3 className="text-white text-sm md:text-base font-semibold">Featured Industry Solutions</h3>
          </div>
          
          {/* Featured Industries Carousel - Mobile Optimized */}
          <div className="relative py-4 md:py-6 px-3 md:px-5">
            {/* Carousel Container */}
            <div className="relative">
              {/* Left Navigation Arrow */}
              <button 
                onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : 0))}
                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center hover:scale-110 group"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Carousel Container */}
              <div 
                ref={sectorsCarouselRef} 
                className="flex overflow-x-auto scrollbar-hide snap-x scroll-smooth gap-2 sm:gap-3 md:gap-6 py-4 md:py-8 px-1 md:px-14 touch-pan-x relative"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {sectors.slice(0, 12).map((sector) => (
                  <Link
                    key={sector.id}
                    href={`/solutions/${sector.slug}`}
                    className="group flex-shrink-0 snap-start w-[calc(33.333%-10px)] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-24px)] lg:w-[calc(25%-24px)]"
                    style={{ minWidth: '100px' }}
                  >
                    <div className="h-full bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2 flex flex-col group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-blue-50 relative">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 md:h-3 group-hover:h-3 md:group-hover:h-4 transition-all duration-300 relative overflow-hidden"></div>
                      <div className="p-2 sm:p-3 md:p-6 flex-grow flex flex-col relative">
                        <div className="bg-blue-50 text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex items-center justify-center text-base sm:text-xl md:text-3xl mb-1 sm:mb-2 md:mb-4 transform group-hover:scale-125 transition-transform duration-500 mx-auto group-hover:shadow-md group-hover:shadow-blue-200 relative">
                          {sector.icon}
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-center text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors group-hover:scale-105 transform duration-300">
                          {sector.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 text-center mb-2 sm:mb-4 line-clamp-2 flex-grow group-hover:text-gray-700 transition-colors">
                          {sector.short_description}
                        </p>
                        <div className="flex justify-center">
                          <span className="text-blue-600 text-xs sm:text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300 group-hover:font-semibold">
                            <span className="hidden xs:inline">View solutions</span>
                            <span className="xs:hidden">View</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Right Navigation Arrow */}
              <button 
                onClick={() => {
                  if (!isHydrated) return;
                  setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : totalSlides - 1));
                }}
                className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center hover:scale-110 group"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Carousel Pagination Indicators */}
            {isHydrated && totalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 relative ${
                      currentSlide === index 
                        ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-sm shadow-blue-300/30' 
                        : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {currentSlide === index && (
                      <span className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
            
            {/* View All Industries Button - Inside Carousel Section */}
            <div className="flex justify-center mt-6 relative z-10">
              <Link
                href="/solutions"
                className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 text-blue-700 font-bold py-2 md:py-3 px-8 md:px-10 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm md:text-base border-2 border-white/20 relative"
              >
                {/* Animated glow effect */}
                <span className="absolute inset-0 bg-blue-200/20 blur-xl rounded-lg animate-pulse"></span>
                <span className="relative z-10">View All Industries</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Section Divider */}
          <div className="px-4 py-2 bg-white/80">
            <div className="border-t border-blue-200"></div>
          </div>

          {/* Industry Benefits Section */}
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 p-4 md:p-6 text-center text-white mt-1 rounded-b-xl">
            <h3 className="text-center text-blue-700 text-base md:text-lg font-semibold mb-4 md:mb-6">Industry-Specific Benefits</h3>
            
            {/* Industry Benefits Cards - Mobile Optimized */}
            <div className="grid md:grid-cols-3 gap-3 md:gap-6">
              {industryBenefits.map((benefit, index) => (
                <div key={index} className={`p-3 md:p-5 bg-white rounded-xl shadow-md md:shadow-lg border-t-4 ${benefit.borderColor} transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-base md:text-lg text-blue-600">{benefit.icon}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 pl-11 md:pl-14 line-clamp-3 md:line-clamp-none">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Industry Selector CTA */}
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 p-4 md:p-6 text-center text-white mt-1">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-blue-700">
              Find Solutions for Your Industry
            </h3>
            <p className="text-sm md:text-base text-blue-600 mb-3 md:mb-4 max-w-3xl mx-auto">
              Can&apos;t find your industry above? We work with businesses across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/solutions"
                className="bg-white text-blue-600 font-semibold py-2 md:py-2.5 px-6 md:px-8 rounded-lg text-sm md:text-base hover:bg-gray-100 transition-colors"
              >
                Browse All 16+ Industries
              </Link>
              <button 
                onClick={onCustomIndustry}
                className="border-2 border-white text-blue-700 font-semibold py-2 md:py-2.5 px-6 md:px-8 rounded-lg text-sm md:text-base hover:bg-white hover:text-blue-600 transition-colors"
              >
                Discuss Your Industry
              </button>
            </div>
          </div>
        </div>
      </UnifiedSectionHeader>
    </section>
  );
}
