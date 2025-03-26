
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
  // Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = 'G-QZLYDT5Q8K';

  // Initialize Google Analytics on component mount
  useEffect(() => {
    try {
      if (GA_MEASUREMENT_ID) {
        initializeGA(GA_MEASUREMENT_ID);
        trackPageView();
      } else {
        console.warn('Google Analytics Measurement ID is not configured');
      }
    } catch (error) {
      console.error('Error initializing Google Analytics:', error);
    }
  }, []);

  // Track page view
  const trackPageView = (path?: string) => {
    try {
      const pagePath = path || window.location.pathname;
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pagePath,
          page_title: document.title
        });
      }
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  // Track recording selection
  const trackRecordingSelection = (categoryId: Category, recordingTitle: string) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'recording_selection', {
          event_category: 'engagement',
          event_label: `${categoryId}:${recordingTitle}`
        });
      }
    } catch (error) {
      console.error('Error tracking recording selection:', error);
    }
  };

  // Track category change
  const trackCategoryChange = (categoryId: Category) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'category_change', {
          event_category: 'navigation',
          event_label: categoryId
        });
      }
    } catch (error) {
      console.error('Error tracking category change:', error);
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
