import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { techStack } from '@/data/homeData';
import { QuickSectionHeader } from '@/components/SectionHeader';

interface TechnologySectionProps {
  onExploreClick: () => void;
}

export default function TechnologySection({ onExploreClick }: TechnologySectionProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Futuristic Section Header - Compact Version */}
      <QuickSectionHeader section="technology" compact={true} />
      
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cutting-Edge <span className="text-blue-600">Technology</span> Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We leverage the latest technologies and innovative approaches to create digital solutions that 
                drive real business growth. Our team specializes in modern web technologies, AI integration, 
                and scalable business automation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Modern Web Technologies (React, Next.js, Node.js)</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">AI-Powered Business Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Cloud Infrastructure & DevOps</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Mobile-First Development Approach</span>
                </div>
              </div>
              <button 
                onClick={onExploreClick}
                className="btn-primary bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Our Solutions
              </button>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  {/* Technology Stack Icons */}
                  {techStack.map((tech, index) => (
                    <div key={index} className={`bg-gradient-to-br ${tech.color} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300`}>
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Transform</h3>
                  <p className="text-gray-600">Let&apos;s build something amazing together</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-purple-400 text-purple-900 p-4 rounded-full text-2xl animate-bounce">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cyan-400 text-cyan-900 p-4 rounded-full text-2xl animate-pulse">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
