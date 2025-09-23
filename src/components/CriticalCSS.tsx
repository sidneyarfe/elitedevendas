import { useEffect } from 'react';

// Critical CSS that should be loaded immediately
const criticalStyles = `
  /* Performance optimizations */
  * {
    box-sizing: border-box;
  }
  
  body {
    font-display: swap;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Layout containment for performance */
  .contain-layout {
    contain: layout style paint;
  }
  
  /* Critical loading states */
  .image-placeholder {
    background: linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted-foreground) / 0.1) 50%, hsl(var(--muted)) 100%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  /* Button critical styles */
  .workshop-button {
    background: linear-gradient(135deg, hsl(45, 100%, 60%), hsl(39, 100%, 55%));
    color: black;
    font-weight: bold;
    transition: transform 0.3s ease;
    will-change: transform;
  }
  
  /* Text gradient critical styles */
  .text-gradient {
    background: linear-gradient(135deg, hsl(45, 100%, 60%), hsl(39, 100%, 55%));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Scroll performance */
  .smooth-scroll {
    scroll-behavior: smooth;
  }
`;

const CriticalCSS = () => {
  useEffect(() => {
    // Inject critical CSS
    const style = document.createElement('style');
    style.textContent = criticalStyles;
    document.head.appendChild(style);

    // Preload non-critical CSS
    const nonCriticalCSS = document.createElement('link');
    nonCriticalCSS.rel = 'preload';
    nonCriticalCSS.as = 'style';
    nonCriticalCSS.href = '/src/index.css';
    nonCriticalCSS.onload = () => {
      nonCriticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(nonCriticalCSS);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CriticalCSS;