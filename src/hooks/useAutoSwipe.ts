import { useEffect, useState } from 'react';
import { getSectors, Sector } from '@/lib/supabase';

interface UseAutoSwipeProps {
  isHydrated: boolean;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  sectorsCarouselRef: React.RefObject<HTMLDivElement>;
}

export const useAutoSwipe = ({
  isHydrated,
  currentSlide,
  setCurrentSlide,
  sectorsCarouselRef
}: UseAutoSwipeProps) => {
  const [sectors, setSectors] = useState<Sector[]>([]);

  useEffect(() => {
    async function fetchSectors() {
      try {
        const sectorsData = await getSectors();
        setSectors(sectorsData || []);
      } catch (error) {
        console.error('Error fetching sectors:', error);
        setSectors([]);
      }
    }

    fetchSectors();
  }, []);
  // Auto-swipe functionality for Industry Solutions carousel
  useEffect(() => {
    if (!isHydrated || sectors.length === 0) return;
    
    // Function to calculate visible sectors based on window width
    const getVisibleSectors = () => {
      if (typeof window === 'undefined') return 4;
      return window.innerWidth < 480 ? 3 : 
             window.innerWidth < 768 ? 3 : 
             window.innerWidth < 1024 ? 3 : 4;
    };
    
    const totalSectors = sectors.slice(0, 12).length;
    const visibleSectors = getVisibleSectors();
    const totalSlides = Math.ceil(totalSectors / visibleSectors);
    
    const swipeDelay = 6000; // 6 seconds per slide
    
    const autoSwipeTimer = setInterval(() => {
      // Check if user is hovering over carousel to pause auto-swipe
      if (sectorsCarouselRef.current && !sectorsCarouselRef.current.matches(':hover')) {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }
    }, swipeDelay);
    
    // Recalculate on window resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newVisibleSectors = getVisibleSectors();
        const newTotalSlides = Math.ceil(totalSectors / newVisibleSectors);
        // Adjust current slide if needed
        if (currentSlide >= newTotalSlides) {
          setCurrentSlide(newTotalSlides - 1);
        }
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(autoSwipeTimer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };    }, [isHydrated, currentSlide, setCurrentSlide, sectorsCarouselRef, sectors.length]);

  // Effect to handle scrolling the carousel when currentSlide changes
  useEffect(() => {
    if (!isHydrated || !sectorsCarouselRef.current) return;
    
    const getVisibleSectors = () => {
      if (typeof window === 'undefined') return 4;
      return window.innerWidth < 480 ? 3 : 
             window.innerWidth < 768 ? 3 : 
             window.innerWidth < 1024 ? 3 : 4;
    };
    
    const carouselWidth = sectorsCarouselRef.current.scrollWidth;
    const containerWidth = sectorsCarouselRef.current.clientWidth;
    const totalSectors = sectors.slice(0, 12).length;
    const visibleSectors = getVisibleSectors();
    
    const totalSlides = Math.ceil(totalSectors / visibleSectors);
    
    // Calculate proper scroll amount for current slide
    let scrollAmount = 0;
    if (totalSlides > 1) {
      const scrollableWidth = carouselWidth - containerWidth;
      scrollAmount = currentSlide * (scrollableWidth / (totalSlides - 1));
    }
    
    // Smooth scroll to position
    sectorsCarouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [currentSlide, isHydrated, sectorsCarouselRef]);
};
