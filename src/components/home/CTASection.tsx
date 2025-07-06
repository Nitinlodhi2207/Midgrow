import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { QuickSectionHeader } from '@/components/SectionHeader';

interface CTASectionProps {
  onConsultationClick: () => void;
}

export default function CTASection({ onConsultationClick }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      {/* Futuristic Section Header - Compact Version */}
      <QuickSectionHeader section="contact" compact={true} customTitle="Let's Get Started" />
      
      <div className="container-custom section-padding text-center">
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Let&apos;s build something amazing together. Start your digital transformation with fresh ideas and modern solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onConsultationClick}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Start Free Consultation
            <ChevronRightIcon className="w-5 h-5 ml-2 inline" />
          </button>
          <Link href="/services" className="border-2 border-white/30 hover:border-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
            Explore Services
          </Link>
        </div>
        
        <div className="flex justify-center items-center mt-6 text-blue-200 text-sm gap-6">
          <span className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-300 mr-2" />
            Fresh Perspective
          </span>
          <span className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-300 mr-2" />
            Modern Technology
          </span>
          <span className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-300 mr-2" />
            Competitive Pricing
          </span>
        </div>
      </div>
    </section>
  );
}
