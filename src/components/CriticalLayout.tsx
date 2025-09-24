import { useEffect } from 'react';

// Critical layout styles to prevent CLS
const criticalLayoutStyles = `
  /* Critical Layout Styles - Prevent CLS */
  .hero-container {
    position: relative;
    width: 100%;
    contain: layout style paint;
  }
  
  .hero-mobile {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3/4;
    min-height: 400px;
  }
  
  .hero-desktop {
    display: none;
    width: 100%;
    height: auto;
    aspect-ratio: 12/5;
    min-height: 500px;
  }
  
  @media (min-width: 768px) {
    .hero-mobile {
      display: none;
    }
    
    .hero-desktop {
      display: block;
    }
  }
  
  /* Prevent layout shift for all images */
  img[width][height] {
    height: auto;
    aspect-ratio: attr(width) / attr(height);
  }
  
  /* Optimize animations for 60fps */
  .animate-pulse-glow {
    animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    will-change: box-shadow;
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px hsl(var(--workshop-gold) / 0.4);
    }
    50% {
      box-shadow: 0 0 40px hsl(var(--workshop-gold) / 0.8);
    }
  }
  
  /* Improve scroll performance */
  .scroll-optimized {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
`;

const CriticalLayout = () => {
  useEffect(() => {
    // Inject critical layout CSS immediately
    const style = document.createElement('style');
    style.textContent = criticalLayoutStyles;
    style.id = 'critical-layout';
    document.head.insertBefore(style, document.head.firstChild);
    
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    fontPreload.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
    document.head.appendChild(fontPreload);

    return () => {
      const existingStyle = document.getElementById('critical-layout');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return null;
};

export default CriticalLayout;