import { useEffect } from 'react';

interface UseMouseInteractionsProps {
  setMousePosition: (pos: { x: number; y: number }) => void;
  setIsInteracting: (isInteracting: boolean) => void;
  setTouchRipples: React.Dispatch<React.SetStateAction<Array<{id: number, x: number, y: number}>>>;
  setDigitalParticles: React.Dispatch<React.SetStateAction<Array<{id: number, x: number, y: number, vx: number, vy: number}>>>;
  setIsVisible: (isVisible: boolean) => void;
  getNextId: () => number;
}

export const useMouseInteractions = ({
  setMousePosition,
  setIsInteracting,
  setTouchRipples,
  setDigitalParticles,
  setIsVisible,
  getNextId
}: UseMouseInteractionsProps) => {
  useEffect(() => {
    // Mouse tracking for 3D parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    // Enhanced touch tracking with ripple effects
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = (touch.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({ x, y });
        setIsInteracting(true);
        
        // Create touch ripple effect
        const rippleId = getNextId();
        setTouchRipples(prev => [...prev, { 
          id: rippleId, 
          x: touch.clientX, 
          y: touch.clientY 
        }]);
        
        // Remove ripple after animation
        setTimeout(() => {
          setTouchRipples(prev => prev.filter(ripple => ripple.id !== rippleId));
        }, 1000);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setIsInteracting(true);
        
        // Create burst particles on touch
        for (let i = 0; i < 8; i++) {
          const particleId = getNextId() + i;
          const angle = (i / 8) * Math.PI * 2;
          const vx = Math.cos(angle) * 2;
          const vy = Math.sin(angle) * 2;
          
          setDigitalParticles(prev => [...prev, {
            id: particleId,
            x: touch.clientX,
            y: touch.clientY,
            vx,
            vy
          }]);
          
          // Remove particle after animation
          setTimeout(() => {
            setDigitalParticles(prev => prev.filter(p => p.id !== particleId));
          }, 800);
        }
      }
    };

    const handleTouchEnd = () => {
      setIsInteracting(false);
    };

    // Click interaction for desktop
    const handleClick = (e: MouseEvent) => {
      // Create digital burst effect on click
      for (let i = 0; i < 12; i++) {
        const particleId = getNextId() + i;
        const angle = (i / 12) * Math.PI * 2;
        const vx = Math.cos(angle) * 3;
        const vy = Math.sin(angle) * 3;
        
        setDigitalParticles(prev => [...prev, {
          id: particleId,
          x: e.clientX,
          y: e.clientY,
          vx,
          vy
        }]);
        
        setTimeout(() => {
          setDigitalParticles(prev => prev.filter(p => p.id !== particleId));
        }, 1200);
      }
    };

    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('click', handleClick);
    };
  }, [setMousePosition, setIsInteracting, setTouchRipples, setDigitalParticles, setIsVisible, getNextId]);
};
