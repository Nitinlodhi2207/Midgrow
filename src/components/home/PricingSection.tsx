import React, { useRef, useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { getPricingPlans, PricingPlan } from '@/lib/supabase';
import { QuickSectionHeader } from '@/components/SectionHeader';

interface PricingSectionProps {
  onPlanSelect: (planName: string) => void;
  onCustomQuote: () => void;
}

export default function PricingSection({ onPlanSelect, onCustomQuote }: PricingSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Set hydrated state on client side
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Fetch pricing plans from Supabase
  useEffect(() => {
    async function fetchPricingPlans() {
      try {
        const plansData = await getPricingPlans();
        setPricingPlans(plansData || []);
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
        setPricingPlans([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPricingPlans();
  }, []);
  
  // Get visible plans based on screen size
  const getVisiblePlans = () => {
    if (!isHydrated || typeof window === 'undefined') return 3;
    return window.innerWidth < 640 ? 1 : 
           window.innerWidth < 1024 ? 2 : 3;
  };
  
  const visiblePlans = getVisiblePlans();
  const totalPlans = pricingPlans.length;
  const totalSlides = Math.ceil(totalPlans / visiblePlans);
  
  // Handle carousel scroll when currentSlide changes
  useEffect(() => {
    if (!isHydrated || !carouselRef.current) return;
    
    const carouselWidth = carouselRef.current.scrollWidth;
    const containerWidth = carouselRef.current.clientWidth;
    
    let scrollAmount = 0;
    if (totalSlides > 1) {
      const scrollableWidth = carouselWidth - containerWidth;
      scrollAmount = currentSlide * (scrollableWidth / (totalSlides - 1));
    }
    
    // Smooth scroll to position
    carouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [currentSlide, isHydrated, totalSlides]);
  
  return (
    <section className="bg-white">
      {/* Futuristic Section Header - Compact Version */}
      <QuickSectionHeader section="pricing" compact={true} />
      
      <div className="container-custom section-padding py-2 md:py-6">
        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <button 
            onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : 0))}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            aria-label="Previous slide"
            disabled={isHydrated ? currentSlide === 0 : false}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Pricing Plans Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x scroll-smooth gap-4 md:gap-6 py-4 md:py-8 px-4 md:px-14 touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {pricingPlans.map((plan, index) => (
              <div 
                key={`pricing-plan-${index}`}
                className={`flex-shrink-0 snap-start rounded-2xl p-4 md:p-8 relative transform transition-all duration-300
                  ${plan.is_popular ? 'bg-blue-600 text-white shadow-2xl scale-[1.02] z-10' : 'bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl'}
                  ${isHydrated ? (visiblePlans === 1 ? 'w-full' : visiblePlans === 2 ? 'w-[calc(50%-16px)]' : 'w-[calc(33.333%-20px)]') : 'w-[calc(33.333%-20px)]'}
                  min-w-[280px]
                `}
              >
                {plan.is_popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    🔥 Best Value
                  </div>
                )}
                <div className="text-center mb-4 md:mb-8">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 ${plan.is_popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2 md:mb-4">
                    <span className={`text-2xl md:text-4xl font-bold ${plan.is_popular ? 'text-white' : 'text-blue-600'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm md:text-lg ${plan.is_popular ? 'text-blue-200' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-xs md:text-base ${plan.is_popular ? 'text-blue-200' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-2 md:space-y-4 mb-4 md:mb-8">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <li key={`plan-${plan.id || index}-feature-${fIndex}`} className="flex items-center">
                      <CheckIcon className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 ${plan.is_popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={`text-xs md:text-base ${plan.is_popular ? 'text-blue-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => onPlanSelect(`${plan.name} Plan`)}
                  className={`w-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold transition-all duration-200 text-center text-sm md:text-base ${
                    plan.is_popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          {/* Right Navigation Arrow */}
          <button 
            onClick={() => setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : totalSlides - 1))}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            aria-label="Next slide"
            disabled={isHydrated ? currentSlide === totalSlides - 1 : false}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        
        <div className="text-center mt-6 md:mt-8">
          <p className="text-gray-600 mb-2 md:mb-4 text-xs md:text-base">
            🎯 <strong>New Business Special:</strong> First month 50% off on any plan!
          </p>
          <button 
            onClick={onCustomQuote}
            className="text-blue-600 hover:text-blue-700 font-semibold underline text-xs md:text-base"
          >
            Need a custom solution? Get a personalized quote →
          </button>
        </div>
      </div>
    </section>
  );
}
