import React, { ReactNode } from 'react';
import { QuickSectionHeader } from './SectionHeader';

interface UnifiedSectionHeaderProps {
  section: string;
  compact?: boolean;
  customTitle?: string;
  customDescription?: string;
  children: ReactNode;
  bgColor?: string;
  contentBgColor?: string;
}

/**
 * UnifiedSectionHeader - Wrapper component that visually connects section headers with their content
 * 
 * Features:
 * - Maintains existing section header designs
 * - Adds visual connectors between headers and content
 * - Standardizes spacing between sections
 * - Provides consistent visual hierarchy
 * 
 * Usage:
 * <UnifiedSectionHeader section="services" compact={true}>
 *   <YourSectionContent />
 * </UnifiedSectionHeader>
 */
export default function UnifiedSectionHeader({
  section,
  compact = false,
  customTitle,
  customDescription,
  children,
  bgColor = "bg-white",
  contentBgColor = "bg-white"
}: UnifiedSectionHeaderProps) {
  return (
    <div className="unified-section relative mb-8 md:mb-12">
      {/* Section Header - using existing component */}
      <div className="section-header-container relative">
        <QuickSectionHeader 
          section={section as any} 
          compact={compact}
          customTitle={customTitle}
          customDescription={customDescription}
        />
      </div>
      
      {/* Visual connector between header and content */}
      <div className="connector-element relative my-2 md:my-3">
        <div className="h-3 mx-auto w-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full shadow-sm"></div>
        <div className="h-6 w-0.5 mx-auto bg-gradient-to-b from-blue-400 to-transparent"></div>
      </div>
      
      {/* Content container with standardized spacing */}
      <div className={`content-container relative ${contentBgColor} rounded-xl border border-blue-200/50 shadow-md mx-1 sm:mx-3 md:mx-6`}>
        {/* Top highlight bar that matches section header style */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-t-xl"></div>
        
        {/* Content with standardized padding */}
        <div className="pt-6 pb-4 px-3 sm:px-4 md:px-6">
          {children}
        </div>
      </div>
    </div>
  );
}
