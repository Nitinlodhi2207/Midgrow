import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { QuickSectionHeader } from '@/components/SectionHeader';

interface CTASectionProps {
  onConsultationClick: () => void;
}

export default function CTASection({ onConsultationClick }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Neon Background Glow */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-fuchsia-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Futuristic Section Header - Compact Version */}
      <QuickSectionHeader section="contact" compact={true} customTitle="Let's Get Started" />
      
      <div className="container-custom section-padding text-center relative z-10">
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100/90 drop-shadow-md">
          Let&apos;s build something amazing together. Start your digital transformation with fresh ideas and modern solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onConsultationClick}
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-black hover:from-cyan-300 hover:via-blue-300 hover:to-fuchsia-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-400/40 hover:shadow-cyan-400/60 transform-gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 drop-shadow-md">Start Free Consultation</span>
            <ChevronRightIcon className="w-5 h-5 ml-2 inline drop-shadow-md" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </div>
          </button>
          <Link href="/services" className="group relative overflow-hidden border-2 border-cyan-400/40 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-lg bg-slate-800/30 hover:bg-slate-800/50 shadow-lg shadow-cyan-400/30">
            <span className="relative z-10 drop-shadow-md">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
        
        <div className="flex justify-center items-center mt-6 text-blue-200/80 text-sm gap-6 flex-wrap">
          <span className="flex items-center">
            <CheckIcon className="w-4 h-4 text-cyan-400 mr-2 drop-shadow-lg" />
            <span className="drop-shadow-md">Fresh Perspective</span>
          </span>
          <span className="flex items-center">
            <CheckIcon className="w-4 h-4 text-cyan-400 mr-2 drop-shadow-lg" />
            <span className="drop-shadow-md">Modern Technology</span>
          </span>
          <span className="flex items-center">
            <CheckIcon className="w-4 h-4 text-cyan-400 mr-2 drop-shadow-lg" />
            <span className="drop-shadow-md">Competitive Pricing</span>
          </span>
        </div>
      </div>
    </section>
  );
}
