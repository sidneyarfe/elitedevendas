import { useEffect } from 'react';

const ResourceHints = () => {
  useEffect(() => {
    // Enhanced preconnect to external domains with DNS prefetch fallback
    const preconnectUrls = [
      { url: 'https://fonts.googleapis.com', crossorigin: true, priority: 'high' },
      { url: 'https://fonts.gstatic.com', crossorigin: true, priority: 'high' },
      { url: 'https://connect.facebook.net', crossorigin: false, priority: 'low' },
      { url: 'https://www.facebook.com', crossorigin: false, priority: 'low' },
      { url: 'https://wa.me', crossorigin: false, priority: 'medium' },
      { url: 'https://img.youtube.com', crossorigin: false, priority: 'medium' },
      { url: 'https://pay.kiwify.com.br', crossorigin: false, priority: 'medium' },
      { url: 'https://bnmyqamklrgovqpturmv.supabase.co', crossorigin: false, priority: 'low' }
    ];

    preconnectUrls.forEach(({ url, crossorigin, priority }) => {
      // Add DNS prefetch first for better performance
      const dnsLink = document.createElement('link');
      dnsLink.rel = 'dns-prefetch';
      dnsLink.href = url;
      document.head.appendChild(dnsLink);
      
      // Then add preconnect
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      if (crossorigin) link.crossOrigin = 'anonymous';
      if (priority && (link as any).fetchPriority !== undefined) {
        (link as any).fetchPriority = priority;
      }
      document.head.appendChild(link);
    });

    // Enhanced preload critical resources with optimized sizes
    const criticalImages = [
      { 
        src: '/src/assets/rodrigo-ana-mobile.png', 
        media: '(max-width: 768px)',
        sizes: '100vw',
        priority: 'high',
        type: 'image/png'
      },
      { 
        src: '/src/assets/rodrigo-ana-desktop.png', 
        media: '(min-width: 769px)',
        sizes: '100vw',
        priority: 'high',
        type: 'image/png'
      },
      {
        src: '/src/assets/workshop-elite-logo.png',
        media: 'all',
        sizes: '200px',
        priority: 'medium',
        type: 'image/png'
      }
    ];

    criticalImages.forEach(({ src, media, sizes, priority, type }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (media) link.media = media;
      if (sizes) link.setAttribute('imagesizes', sizes);
      if (type) link.type = type;
      if ((link as any).fetchPriority !== undefined) {
        (link as any).fetchPriority = priority;
      }
      // Add cache control headers
      link.setAttribute('crossorigin', 'anonymous');
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

    // Smart prefetch non-critical resources with priority levels
    const prefetchImages = [
      { src: '/src/assets/foto_ana.jpg', priority: 'medium' },
      { src: '/src/assets/foto_rodrigo.jpg', priority: 'medium' },
      { src: '/src/assets/on-office-interior.jpg', priority: 'low' },
      { src: '/src/assets/dr-rafael.png', priority: 'high' }, // Small but visible
      { src: '/src/assets/onoffice_sala.png', priority: 'low' },
      { src: '/src/assets/onoffice_local.png', priority: 'low' }
    ];

    // Enhanced requestIdleCallback for intelligent prefetching
    const prefetchCallback = () => {
      prefetchImages.forEach(({ src, priority }, index) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        if ((link as any).fetchPriority !== undefined) {
          (link as any).fetchPriority = priority;
        }
        // Smart stagger based on priority
        const delay = priority === 'high' ? index * 50 : 
                     priority === 'medium' ? index * 100 : 
                     index * 200;
        setTimeout(() => {
          document.head.appendChild(link);
        }, delay);
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