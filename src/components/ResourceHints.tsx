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

    // Preload critical resources with priority
    const criticalImages = [
      { src: '/src/assets/rodrigo-ana-mobile.png', media: '(max-width: 768px)' },
      { src: '/src/assets/rodrigo-ana-desktop.png', media: '(min-width: 769px)' }
    ];

    criticalImages.forEach(({ src, media }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (media) link.media = media;
      link.fetchPriority = 'high';
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

    // Use requestIdleCallback for non-critical prefetching
    const prefetchCallback = () => {
      prefetchImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
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