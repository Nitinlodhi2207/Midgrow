import React from 'react';
import { visionValues } from '@/data/homeData';
import { QuickSectionHeader } from '@/components/SectionHeader';

export default function VisionValuesSection() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50">
      {/* Futuristic Section Header - Compact Version */}
      <QuickSectionHeader section="about" compact={true} customTitle="Our Vision" />
      
      <div className="container-custom section-padding py-2 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          {visionValues.map((value, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <div className="flex items-center md:flex-col md:items-center">
                <div className={`w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-lg md:rounded-2xl flex items-center justify-center mb-0 md:mb-4 mr-2 md:mr-0 md:mx-auto group-hover:shadow-lg transition-all duration-300 flex-shrink-0`}>
                  <span className="text-sm md:text-2xl text-white">{value.icon}</span>
                </div>
                <div className="text-left md:text-center">
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-0 md:mb-2">{value.title}</h3>
                  <p className="text-xs md:text-base text-gray-600 line-clamp-2 md:line-clamp-none">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
