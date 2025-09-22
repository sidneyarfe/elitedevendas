import { useState, useEffect } from "react";

export const useScrollVisibility = (targetElementId: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetElementId);
      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();
      const isElementPassed = rect.bottom < 0;
      
      setIsVisible(isElementPassed);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetElementId]);

  return isVisible;
};