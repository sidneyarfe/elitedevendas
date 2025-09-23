import { useEffect } from 'react';

// Critical CSS that should be loaded immediately
const criticalStyles = `
  /* Hero section critical styles */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Button critical styles */
  .workshop-button {
    background: linear-gradient(135deg, hsl(45, 100%, 60%), hsl(39, 100%, 55%));
    color: black;
    font-weight: bold;
    transition: transform 0.3s ease;
  }
  
  /* Text gradient critical styles */
  .text-gradient {
    background: linear-gradient(135deg, hsl(45, 100%, 60%), hsl(39, 100%, 55%));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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