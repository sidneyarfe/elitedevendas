import { useEffect } from 'react';

const ResourceHints = () => {
  useEffect(() => {
    // Preconnect to external domains
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://wa.me'
    ];

    preconnectUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical resources
    const criticalImages = [
      '/src/assets/rodrigo-ana-mobile.png',
      '/src/assets/rodrigo-ana-desktop.png',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources for next interactions
    const prefetchImages = [
      '/src/assets/foto_ana.jpg',
      '/src/assets/foto_rodrigo.jpg',
      '/src/assets/on-office-interior.jpg',
      '/src/assets/workshop-elite-logo.png'
    ];

    // Delay prefetch to not interfere with critical loading
    setTimeout(() => {
      prefetchImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }, 2000);

  }, []);

  return null;
};

export default ResourceHints;