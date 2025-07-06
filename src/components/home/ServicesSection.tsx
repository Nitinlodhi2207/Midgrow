import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { getServices, Service } from '@/lib/supabase';
import UnifiedSectionHeader from '@/components/UnifiedSectionHeader';

interface ServicesSectionProps {
  hoveredService: number | null;
  setHoveredService: (index: number | null) => void;
}

/**
 * ServicesSection - Mobile-optimized service cards with app-like header
 * 
 * Mobile optimizations:
 * - Hidden service descriptions on mobile (< md breakpoint)
 * - Limited to 2 features on mobile, full list on desktop
 * - Compact padding and spacing for mobile devices
 * - Responsive text sizing and icon scaling
 * - App-like section header with vibrant design
 */
export default function ServicesSection({ hoveredService, setHoveredService }: ServicesSectionProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const servicesData = await getServices();
        setServices(servicesData || []);
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50">
        <UnifiedSectionHeader section="services" compact={true} bgColor="bg-gray-50" contentBgColor="bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Loading skeleton */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={`skeleton-${index}`} className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg animate-pulse max-w-md mx-auto">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </UnifiedSectionHeader>
      </section>
    );
  }

  return (
    <section className="bg-gray-50">
      {/* Unified Section Header with content */}
      <UnifiedSectionHeader section="services" compact={true} bgColor="bg-gray-50" contentBgColor="bg-gray-50">
        {/* Services Grid */}
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {services.map((service: Service, index: number) => (
              <div 
                key={`service-${service.id || index}`}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer max-w-md mx-auto"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                  {service.icon}
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-2 md:mb-3 lg:mb-4 text-center leading-tight">{service.title}</h3>
                <p className="hidden md:block text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-relaxed text-center">{service.description}</p>
                <ul className="space-y-1 sm:space-y-2 mb-2 sm:mb-4 md:mb-6">
                  {service.features.slice(0, 2).map((feature: string, fIndex: number) => (
                    <li key={`service-${service.id || index}-feature-${fIndex}`} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <CheckIcon className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {/* Show remaining features only on desktop */}
                  {service.features.slice(2).map((feature: string, fIndex: number) => (
                    <li key={`service-${service.id || index}-feature-${fIndex + 2}`} className="hidden md:flex items-center text-xs sm:text-sm text-gray-700">
                      <CheckIcon className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-2 sm:mt-4 md:mt-6 transform transition-all duration-300 ${hoveredService === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} text-center`}>
                  <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center text-xs sm:text-sm md:text-base">
                    <span className="hidden sm:inline">Learn More</span>
                    <span className="sm:hidden">More</span>
                    <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UnifiedSectionHeader>
    </section>
  );
}
