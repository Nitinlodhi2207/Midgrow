'use client'

import React, { useEffect } from 'react';
import { useHomePageState } from '@/hooks/useHomePageState';
import { useMouseInteractions } from '@/hooks/useMouseInteractions';
import { useAutoSwipe } from '@/hooks/useAutoSwipe';

// Import section components
import HeroSection from '@/components/home/HeroSection';
import DesktopHeroSection from '@/components/home/DesktopHeroSection';
import IndustrySolutionsSection from '@/components/home/IndustrySolutionsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import VisionValuesSection from '@/components/home/VisionValuesSection';
import GetStartedProcessSection from '@/components/home/GetStartedProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PricingSection from '@/components/home/PricingSection';
import CTASection from '@/components/home/CTASection';
import ContactModal from '@/components/home/ContactModal';

export default function Home() {
  const {
    // State
    setIsVisible,
    hoveredService,
    setHoveredService,
    typedText,
    mousePosition,
    setMousePosition,
    isInteracting,
    setIsInteracting,
    touchRipples,
    setTouchRipples,
    digitalParticles,
    setDigitalParticles,
    showContactModal,
    setShowContactModal,
    selectedService,
    setSelectedService,
    burstEffects,
    setBurstEffects,
    isHydrated,
    currentSlide,
    setCurrentSlide,
    
    // Refs
    sectorsCarouselRef,
    
    // Helpers
    getNextId
  } = useHomePageState();

  // Custom CSS for hiding scrollbars
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle mouse interactions and effects
  useMouseInteractions({
    setMousePosition,
    setIsInteracting,
    setTouchRipples,
    setDigitalParticles,
    setIsVisible,
    getNextId
  });

  // Handle auto-swipe for industry carousel
  useAutoSwipe({
    isHydrated,
    currentSlide,
    setCurrentSlide,
    sectorsCarouselRef
  });

  // Handler functions for service interactions
  const handleServiceClick = (service: any, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Create burst effect
    const burstId = getNextId();
    setBurstEffects(prev => [...prev, { id: burstId, x, y }]);
    
    // Remove burst effect after animation
    setTimeout(() => {
      setBurstEffects(prev => prev.filter(burst => burst.id !== burstId));
    }, 1000);

    // Open contact modal with selected service
    setSelectedService(service.name);
    setShowContactModal(true);
  };

  const handleGetStartedClick = () => {
    setSelectedService('Get Started');
    setShowContactModal(true);
  };

  const handleConsultationClick = () => {
    setSelectedService('Free Consultation');
    setShowContactModal(true);
  };

  const handleIndustryConsultation = () => {
    setSelectedService('Industry Consultation');
    setShowContactModal(true);
  };

  const handleCustomIndustry = () => {
    setSelectedService('Custom Industry Solution');
    setShowContactModal(true);
  };

  const handlePlanSelect = (planName: string) => {
    setSelectedService(planName);
    setShowContactModal(true);
  };

  const handleCustomQuote = () => {
    setSelectedService('Custom Quote');
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Desktop */}
      <DesktopHeroSection />
      
      {/* Hero Section - Mobile */}
      <div className="lg:hidden">
        <HeroSection
          typedText={typedText}
          mousePosition={mousePosition}
          isInteracting={isInteracting}
          isHydrated={isHydrated}
          touchRipples={touchRipples}
          digitalParticles={digitalParticles}
          burstEffects={burstEffects}
          onServiceClick={handleServiceClick}
          onGetStartedClick={handleGetStartedClick}
        />
      </div>

      {/* Solutions by Industry Section */}
      <IndustrySolutionsSection
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        sectorsCarouselRef={sectorsCarouselRef}
        isHydrated={isHydrated}
        onIndustryConsultation={handleIndustryConsultation}
        // onCustomIndustry={handleCustomIndustry}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection onGetStartedClick={handleGetStartedClick} />

      {/* Vision & Values Section */}
      <VisionValuesSection />

      {/* Get Started Process Section */}
      <GetStartedProcessSection onConsultationClick={handleConsultationClick} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection 
        onPlanSelect={handlePlanSelect}
        onCustomQuote={handleCustomQuote}
      />

      {/* CTA Section */}
      <CTASection onConsultationClick={handleConsultationClick} />

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={closeContactModal}
        selectedService={selectedService}
      />
    </div>
  );
}
