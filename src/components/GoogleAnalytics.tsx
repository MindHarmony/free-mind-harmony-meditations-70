
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

// Your Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-QZLYDT5Q8K';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const { isAllowed } = useCookieConsent();
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    // Define the gtag function if it doesn't exist yet
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }
    
    // Update consent state whenever it changes
    window.gtag('consent', 'update', {
      'analytics_storage': isAllowed('analytics') ? 'granted' : 'denied'
    });
    
    console.log('Analytics consent updated:', isAllowed('analytics') ? 'granted' : 'denied');
  }, [isAllowed]);

  // Track page views when location changes
  useEffect(() => {
    if (window.gtag && isAllowed('analytics')) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
      console.log('Tracking page view:', location.pathname);
    }
  }, [location, isAllowed]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
