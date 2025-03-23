
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

// Replace this with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

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
    // Only load Google Analytics if analytics cookies are allowed
    if (isAllowed('analytics')) {
      // Add Google Analytics script dynamically
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // We'll send page views manually
      });

      // Remove the script when component unmounts
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isAllowed]);

  // Track page views when location changes
  useEffect(() => {
    if (isAllowed('analytics') && window.gtag) {
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
