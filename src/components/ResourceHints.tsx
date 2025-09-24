import { useEffect } from 'react';

const ResourceHints = () => {
  useEffect(() => {
    // Preconnect to external domains with priority
    const preconnectUrls = [
      { url: 'https://fonts.googleapis.com', crossorigin: true },
      { url: 'https://fonts.gstatic.com', crossorigin: true },
      { url: 'https://wa.me', crossorigin: false },
      { url: 'https://img.youtube.com', crossorigin: false },
      { url: 'https://pay.kiwify.com.br', crossorigin: false }
    ];

    preconnectUrls.forEach(({ url, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      if (crossorigin) link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical resources with priority and sizes
    const criticalImages = [
      { 
        src: '/src/assets/rodrigo-ana-mobile.png', 
        media: '(max-width: 768px)',
        sizes: '100vw',
        priority: 'high'
      },
      { 
        src: '/src/assets/rodrigo-ana-desktop.png', 
        media: '(min-width: 769px)',
        sizes: '50vw',
        priority: 'high'
      }
    ];

    criticalImages.forEach(({ src, media, sizes, priority }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (media) link.media = media;
      if (sizes) link.setAttribute('imagesizes', sizes);
      link.fetchPriority = priority as any;
      document.head.appendChild(link);
    });

    // Early preload for YouTube thumbnails
    const youtubeVideoIds = ['B0cORHhpoQE', 'gNn-2u2ZhzU'];
    youtubeVideoIds.forEach(videoId => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources after critical content loads
    const prefetchImages = [
      '/src/assets/foto_ana.jpg',
      '/src/assets/foto_rodrigo.jpg',
      '/src/assets/on-office-interior.jpg',
      '/src/assets/workshop-elite-logo.png',
      '/src/assets/dr-rafael.png'
    ];

    // Use requestIdleCallback for non-critical prefetching with priority
    const prefetchCallback = () => {
      prefetchImages.forEach((src, index) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        // Stagger prefetch to avoid blocking critical resources
        setTimeout(() => {
          document.head.appendChild(link);
        }, index * 100);
      });
      
      // Prefetch critical JavaScript chunks
      const criticalChunks = [
        '/src/components/CountdownTimer.tsx',
        '/src/components/LeadFormModal.tsx'
      ];
      
      criticalChunks.forEach((chunk, index) => {
        setTimeout(() => {
          const link = document.createElement('link');
          link.rel = 'modulepreload';
          link.href = chunk;
          document.head.appendChild(link);
        }, (prefetchImages.length + index) * 100);
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(prefetchCallback, { timeout: 3000 });
    } else {
      setTimeout(prefetchCallback, 2000);
    }

  }, []);

  return null;
};

export default ResourceHints;