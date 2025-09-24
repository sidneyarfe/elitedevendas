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
        priority: 'high',
        as: 'image',
        fetchpriority: 'high'
      },
      { 
        src: '/src/assets/rodrigo-ana-desktop.png', 
        media: '(min-width: 769px)',
        sizes: '100vw',
        priority: 'high',
        as: 'image',
        fetchpriority: 'high'
      }
    ];

    criticalImages.forEach(({ src, media, sizes, priority, as: asType, fetchpriority }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = asType;
      link.href = src;
      if (media) link.media = media;
      if (sizes) link.setAttribute('imagesizes', sizes);
      if (fetchpriority) link.fetchPriority = fetchpriority as any;
      link.type = 'image/webp';
      document.head.appendChild(link);
      
      // Fallback for browsers that don't support WebP
      const fallbackLink = document.createElement('link');
      fallbackLink.rel = 'preload';
      fallbackLink.as = asType;
      fallbackLink.href = src;
      if (media) fallbackLink.media = media;
      if (sizes) fallbackLink.setAttribute('imagesizes', sizes);
      document.head.appendChild(fallbackLink);
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
          if (document.head.contains(link)) return; // Prevent duplicates
          document.head.appendChild(link);
        }, index * 50); // Reduced delay for faster prefetching
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
          if (!document.head.contains(link)) {
            document.head.appendChild(link);
          }
        }, (prefetchImages.length + index) * 50);
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