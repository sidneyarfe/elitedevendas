import { useEffect } from 'react';

// Critical CSS that should be loaded immediately
const criticalStyles = `
  /* Performance Optimizations */
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
  }
  
  body {
    margin: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: swap;
    contain: layout style;
  }
  
  /* Content Visibility for Performance */
  .content-auto {
    content-visibility: auto;
    contain-intrinsic-size: 1px 1000px;
  }
  
  /* Layout Containment for Performance */
  .contain-layout {
    contain: layout style paint;
    will-change: transform;
  }
  
  /* GPU Acceleration */
  .gpu-accelerated {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  
  /* Layout shift prevention for critical sections */
  #diagnostico {
    min-height: 600px;
    aspect-ratio: 16/9;
    contain: layout;
  }
  
  /* Critical skeleton loading */
  .loading-placeholder {
    background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--muted-foreground)/10%) 50%, hsl(var(--muted)) 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 0.5rem;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  /* Button Styles with GPU Acceleration */
  .btn-workshop {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: none;
    color: #000;
    font-weight: bold;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    transform: translate3d(0, 0, 0);
  }
  
  .btn-workshop:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  }
  
  /* Text Gradient */
  .text-gradient {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    will-change: auto;
  }
  
  /* Intersection Observer Optimizations */
  .fade-in-view {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .fade-in-view.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CriticalCSS = () => {
  useEffect(() => {
    // Inject critical CSS
    const style = document.createElement('style');
    style.textContent = criticalStyles;
    document.head.appendChild(style);

      // Create preload link for main CSS with critical resource hints
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/src/index.css';
      preloadLink.as = 'style';
      if ((preloadLink as any).fetchPriority !== undefined) {
        (preloadLink as any).fetchPriority = 'high';
      }
      preloadLink.onload = () => {
        preloadLink.rel = 'stylesheet';
        preloadLink.media = 'all';
      };
      document.head.appendChild(preloadLink);
      
      // Preload critical fonts with display swap
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      if ((fontPreload as any).fetchPriority !== undefined) {
        (fontPreload as any).fetchPriority = 'high';
      }
      document.head.appendChild(fontPreload);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CriticalCSS;