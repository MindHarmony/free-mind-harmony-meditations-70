
import { useEffect } from 'react';
import { Category } from '@/data/recordings';

// Initialize Google Analytics - function will be called once GA script is loaded
const initializeGA = (measurementId: string) => {
  // Create script element for Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  // Make gtag available globally
  window.gtag = gtag;
};

// Analytics hook
export const useAnalytics = () => {
  // Google Analytics Measurement ID - replace this with your actual ID when ready
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA ID

  // Initialize Google Analytics on component mount
  useEffect(() => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initializeGA(GA_MEASUREMENT_ID);
      trackPageView();
    } else {
      console.warn('Google Analytics Measurement ID is not configured');
    }
  }, []);

  // Track page view
  const trackPageView = (path?: string) => {
    const pagePath = path || window.location.pathname;
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: document.title
      });
    }
  };

  // Track recording selection
  const trackRecordingSelection = (categoryId: Category, recordingTitle: string) => {
    if (window.gtag) {
      window.gtag('event', 'recording_selection', {
        event_category: 'engagement',
        event_label: `${categoryId}:${recordingTitle}`
      });
    }
  };

  // Track category change
  const trackCategoryChange = (categoryId: Category) => {
    if (window.gtag) {
      window.gtag('event', 'category_change', {
        event_category: 'navigation',
        event_label: categoryId
      });
    }
  };

  return {
    trackPageView,
    trackRecordingSelection,
    trackCategoryChange
  };
};

// Add typings for window object to include dataLayer and gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
