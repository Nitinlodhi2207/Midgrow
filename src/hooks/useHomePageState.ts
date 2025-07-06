import { useState, useEffect, useRef } from 'react';
import { typingWords } from '@/data/homeData';

export const useHomePageState = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [touchRipples, setTouchRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [digitalParticles, setDigitalParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [burstEffects, setBurstEffects] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Ref for sectors carousel container
  const sectorsCarouselRef = useRef<HTMLDivElement>(null);
  
  // Stable ID counter to replace Date.now()
  const idCounterRef = useRef(0);
  const getNextId = () => ++idCounterRef.current;

  // Prevent hydration mismatch by only running dynamic content on client
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Text typing animation
  useEffect(() => {
    if (!isHydrated) return;
    
    const currentWord = typingWords[currentWordIndex];
    let typeInterval: NodeJS.Timeout;
    let deleteInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let isCancelled = false;
    
    // Reset text at the start of each word
    setTypedText('');
    
    // Typing phase
    let charIndex = 0;
    const startTyping = () => {
      typeInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(typeInterval);
          return;
        }
        
        if (charIndex < currentWord.length) {
          setTypedText(currentWord.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Pause before deleting
          pauseTimeout = setTimeout(() => {
            if (isCancelled) return;
            startDeleting();
          }, 2500);
        }
      }, 120);
    };
    
    // Deleting phase
    const startDeleting = () => {
      deleteInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(deleteInterval);
          return;
        }
        
        setTypedText(prev => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            clearInterval(deleteInterval);
            if (!isCancelled) {
              setTimeout(() => {
                if (!isCancelled) {
                  setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
                }
              }, 300);
            }
            return '';
          }
        });
      }, 60);
    };
    
    // Start the animation
    startTyping();
    
    // Cleanup function
    return () => {
      isCancelled = true;
      clearInterval(typeInterval);
      clearInterval(deleteInterval);
      clearTimeout(pauseTimeout);
    };
  }, [currentWordIndex, isHydrated]);

  return {
    // State
    isVisible,
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
  };
};
