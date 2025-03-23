
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

  useEffect(() => {
    // Add Google Analytics script unconditionally for verification
    // But only enable tracking if consent is given
    const loadGoogleAnalytics = () => {
      // Check if script already exists
      if (document.getElementById('google-analytics')) {
        return;
      }

      // Add Google Analytics script dynamically
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.id = 'google-analytics';
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      
      // Configure with consent mode
      window.gtag('consent', 'default', {
        'analytics_storage': isAllowed('analytics') ? 'granted' : 'denied'
      });
      
      window.gtag('config', GA_MEASUREMENT_ID);
      
      console.log('Google Analytics initialized');
    };

    loadGoogleAnalytics();

    // Update consent state whenever it changes
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': isAllowed('analytics') ? 'granted' : 'denied'
      });
      console.log('Analytics consent updated:', isAllowed('analytics') ? 'granted' : 'denied');
    }
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
