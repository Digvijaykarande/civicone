// src/serviceWorkerRegistration.js
export function registerSW() {
  // Only register service worker in production
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New content is available, force reload
                console.log('New content available, reloading...');
                window.location.reload();
              } else {
                console.log('Content cached for offline use.');
              }
            }
          };
        };
      }).catch(err => console.error('SW registration failed:', err));
    });
  }
}
