import React from 'react';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import { processSteps } from '@/data/homeData';
import UnifiedSectionHeader from '@/components/UnifiedSectionHeader';

interface GetStartedProcessSectionProps {
  onConsultationClick: () => void;
}

export default function GetStartedProcessSection({ onConsultationClick }: GetStartedProcessSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 text-blue-900 relative overflow-hidden">
      {/* Animated background elements - smaller and more subtle for mobile */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-24 h-24 bg-cyan-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Unified Section Header with content */}
      <UnifiedSectionHeader 
        section="process" 
        compact={true}
        contentBgColor="bg-white/90"
      >
        <div className="container-custom py-2 md:py-6 relative">
          
          {/* Process Steps - horizontal process flow with arrows, compact spacing */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-10">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`relative flex flex-col items-center bg-white rounded-xl shadow-md border-2 px-3 py-4 md:px-5 md:py-6 min-w-[140px] max-w-[220px] transition-all duration-300
                  ${index === 0 ? 'border-cyan-400' : ''}
                  ${index === 1 ? 'border-indigo-400' : ''}
                  ${index === 2 ? 'border-purple-400' : ''}
                  ${index === 3 ? 'border-emerald-400' : ''}
                `}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full mb-2 text-lg font-bold bg-gradient-to-br from-blue-100 to-cyan-200 text-blue-900 border border-blue-200">
                    {index + 1}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-blue-900 mb-1 text-center">{step.title}</h3>
                  <p className="text-xs md:text-sm text-blue-700 text-center whitespace-pre-line">{step.description}</p>
                </div>
                {/* Arrow between steps, except after last */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center mx-2">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-blue-300">
                      <path d="M4 16h24m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Call to Action - more compact for mobile */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-3xl p-3 md:p-12 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-lg md:text-3xl font-bold text-blue-900 mb-1 md:mb-4">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-xs md:text-xl text-blue-700 mb-2 md:mb-8">
                Join forward-thinking businesses who trust us to transform their digital presence
              </p>
              
              {/* Button layout - stacked on mobile, side by side on larger screens */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center">
                <button 
                  onClick={onConsultationClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 md:px-8 py-1.5 md:py-4 rounded-lg md:rounded-2xl font-semibold text-xs md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                >
                  Start Free Consultation
                </button>
                <Link 
                  href="/services" 
                  className="border-2 border-blue-400 hover:border-blue-600 text-blue-900 hover:bg-blue-100/40 px-3 md:px-8 py-1.5 md:py-4 rounded-lg md:rounded-2xl font-semibold text-xs md:text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  View All Services
                </Link>
              </div>
              
              {/* Features list - 3-column grid on mobile */}
              <div className="grid grid-cols-3 md:flex md:justify-center items-center mt-2 md:mt-6 text-blue-700 text-xs md:text-sm">
                <span className="flex items-center md:mr-6 justify-center md:justify-start">
                  <CheckIcon className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1 md:mr-2" />
                  <span>No Setup Fees</span>
                </span>
                <span className="flex items-center md:mr-6 justify-center md:justify-start">
                  <CheckIcon className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1 md:mr-2" />
                  <span>Free Consult</span>
                </span>
                <span className="flex items-center justify-center md:justify-start">
                  <CheckIcon className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1 md:mr-2" />
                  <span>Quick Response</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </UnifiedSectionHeader>
    </section>
  );
}