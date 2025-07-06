import React from 'react';
import { whyChooseUsPoints } from '@/data/homeData';
import { QuickSectionHeader } from '@/components/SectionHeader';

interface WhyChooseUsSectionProps {
  onGetStartedClick: () => void;
}

export default function WhyChooseUsSection({ onGetStartedClick }: WhyChooseUsSectionProps) {
  return (
    <section className="bg-white">
      {/* Futuristic Section Header - Compact Version */}
      <QuickSectionHeader section="about" compact={true} customTitle="Why Choose Midgrow" />
      
      <div className="container-custom section-padding py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {whyChooseUsPoints.map((point, index) => (
            <div key={index} className={`bg-gradient-to-br ${point.color} rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-xl transition-all duration-300 group`}>
              <div className="flex items-center mb-3 md:mb-4">
                <span className="text-2xl md:text-4xl mr-3 md:mr-0">{point.icon}</span>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 md:hidden">{point.title}</h3>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hidden md:block">{point.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">{point.description}</p>
              <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                {point.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center">
                    <div className={`w-2 h-2 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'} rounded-full mr-2 md:mr-3`}></div>
                    <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 md:mt-12">
          <button 
            onClick={onGetStartedClick}
            className="btn-primary bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Start Your Digital Journey
          </button>
        </div>
      </div>
    </section>
  );
}
